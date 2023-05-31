import { ChangeEvent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import BootstrapDialogTitle from "./boostrapDialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import {
  useLazyGetDescriptionQuery,
  useLazyGetSupplierQuery,
} from "@/logic/settlements";
import {
  TPCustom,
  Supplier,
  TPros,
  TPropsValues,
  ExponseSettlment,
} from "@/types/settlement";
import { useLazyNewRegisterQuery } from "@/logic/settlements";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const expenseSettlement: ExponseSettlment[] = [
  { value: "TravelingExpenses", label: "Viáticos" },
  { value: "PettyCash", label: "Caja Chica" },
  { value: "CreditCard", label: "Tarjeta de crédito" },
];

export default function CustomizedDialogs({
  company,
  worker,
  setNewRegister,
}: TPCustom) {
  const [selectVendAccount, setSelectVendAccount] = useState<TPros>({label: "", value: "" });
  const [selectDimensionCombination, setSelecDimensionCombination] = useState<TPros>({ label: "", value: "" });
  const [selectExpenseSettlementType, setSelectExpenseSettlementType] = useState<TPros>({ label: "", value: "" });
  const [triggerDescription, { data: description }] = useLazyGetDescriptionQuery();
  const [triggerSupplier, { data: supplier }] = useLazyGetSupplierQuery();
  const [open, setOpen] = useState(false);
  const [checkedImport, setCheckedImport] = useState(false);

  useEffect(() => {
    if (company) {
      triggerDescription({ company });
      triggerSupplier({ company });
    }
  }, [company, triggerDescription, triggerSupplier]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeImport = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedImport(event.target.checked);
  };

  const validationSchema = Yup.object({
    Description: Yup.string().required("El valor es requerido"),
    ExpenseReference: Yup.string().required("El valor es requerido"),
  });

  const mappingSupplier: TPros[] = supplier?.value?.map((val: Supplier) => {
    return {
      label: `${val.VendorAccountNumber} - ${val.VendorName}`,
      value: val.VendorAccountNumber,
    };
  });

  const mappingDescription: TPros[] = description?.value?.map(
    (val: TPropsValues) => {
      return {
        label: `${val.Name}-${val.Description}`,
        value: val.Name,
      };
    }
  );

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Nuevo Registro
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Agregar un nuevo registro
        </BootstrapDialogTitle>
        <div>
          <Formik
            initialValues={{
              Description: "",
              ExpenseReference: "",
            }}
            validationSchema={validationSchema}
            onSubmit={({
              Description,
              ExpenseReference,
              
            }) => {
              const body = {
                Description,
                ExpenseReference,
                ExpenseSettlementType: selectExpenseSettlementType.value,
                DimensionCombination: selectDimensionCombination.value,
                VendAccount: selectVendAccount.value,
                dataAreaId: company,
                OriginWorker: worker,
                AssignedWorker: worker,
                Import: checkedImport ? "Yes" : "No",
              };
              setNewRegister(body);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <DialogContent dividers>
                  <Grid container spacing={1}>
                    <Grid xs={12}>
                      <Autocomplete
                        fullWidth
                        onChange={(_, newValue) => {
                          setSelectVendAccount(newValue as TPros);
                        }}
                        sx={{ padding: "10px" }}
                        disablePortal
                        id="proveedor"
                        options={mappingSupplier || []}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Proveedor"
                            size="small"
                          />
                        )}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        sx={{ padding: "10px" }}
                        fullWidth
                        placeholder="Descripción"
                        name="Description"
                        value={values.Description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.Description && Boolean(errors.Description)
                        }
                        size="small"
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Autocomplete
                        fullWidth
                        sx={{ padding: "10px" }}
                        disablePortal
                        id="DimensionCombination"
                        onChange={(_, newValue) => {
                          setSelecDimensionCombination(newValue as TPros);
                        }}
                        options={mappingDescription || []}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Dimensión de gasto"
                          />
                        )}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        sx={{ padding: "10px" }}
                        fullWidth
                        placeholder="Referencias"
                        name="ExpenseReference"
                        size="small"
                        value={values.ExpenseReference}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.ExpenseReference &&
                          Boolean(errors.ExpenseReference)
                        }
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Autocomplete
                        fullWidth
                        sx={{ padding: "10px" }}
                        disablePortal
                        id="DimensionCombination"
                        onChange={(_, newValue) => {
                          setSelectExpenseSettlementType(newValue as TPros);
                        }}
                        options={expenseSettlement}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            label="Tipo de liquidación"
                            name="ExpenseSettlementType"
                          />
                        )}
                      />
                    </Grid>
                    <Grid xs={12} sx={{ paddingLeft: "10px" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkedImport}
                            onChange={handleChangeImport}
                            name="Import"
                          />
                        }
                        label="Importacion"
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    type="submit"
                    variant="contained"
                    size="small"
                    onClick={handleClose}
                  >
                    Guardar Cambios
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </div>
      </BootstrapDialog>
    </div>
  );
}
