import React, { FC } from "react";
import DataGrid, {
  FilterRow,
  Selection,
  Paging,
  SearchPanel,
  Column,
  FilterPanel,
  Pager,
} from "devextreme-react/data-grid";
import { FCData , Values} from "@/types/settlement";

const DataGridSettlements: FC<FCData> = ({ data, isLoading, isError }) => {

    const allowedPageSizes:number[] = [10,20,30,40,50]

    const dataSource:Values[] = data?.map((val, i)=> { 
      return { 
        ...val, 
        index:i+1,
      }
    });

    const CustomComponent = () => { 
      return ( 
        <div> 
          <button> Added</button>
        </div>
      )
    }


  return (
    <>
      <DataGrid
        id={"Settlement"}
        dataSource={dataSource}
        showBorders
        keyExpr="index"
        noDataText="No tiene información"
        columnAutoWidth
      >
        <Selection mode="single" />
        <Column 
          caption={"ID"} 
          dataField={"ExpenseSettlementId"} 
        />
        <Column 
          caption={"proveedor"}
          dataField={"VendAccount"}

        />
        <Column 
          caption={"Nombre"}
          dataField={"VendName"}
          width={'auto'}
        />
        <Column 
          caption={"Descripción"} 
          dataField={"Description"} 

        />
        <Column
          caption={"Dimensión de gasto"}
          dataField={"DimensionCombination"}

        />
        <Column 
          caption={"Referencias"} 
          dataField={"ExpenseReference"} 

        />
        <Column 
          caption={"Estados"} 
          dataField={"TrvAppStatusLabel"} 
        />
        <Column
          caption={"Tipo de liquidación"}
          dataField={"ExpenseSettlementTypeLabel"}
        />
         <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
          />
        <Column
          caption={"Autorizador asignado"}
          dataField={"AssignedWorkerName"}
          width={'auto'}

        />
        <Column 
          caption={"Total"} 
          dataField={"TotalAmountCur"}
        />
        <Column 
          caption={"Importación"}
          dataField={"Import"} 
        />
        <Column 
          caption={'Action'}
          cellComponent={CustomComponent}
        /> 
        <SearchPanel 
          visible={true} 
          placeholder={'Buscar'}
        />
        <Selection />
        <FilterPanel
          texts={{
            createFilter: "Crear Filtro",
          }}
          visible
        />
        <FilterRow visible />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </>
  );
};

export default DataGridSettlements;
