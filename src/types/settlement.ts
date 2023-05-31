export interface FCData {
    data:       Values[], 
    isError:    boolean; 
    isLoading:  boolean;
  }
  
  
  export interface Values {
    "@odata.etag":              string;
    dataAreaId:                 string;
    ExpenseSettlementId:        string;
    FAModifiedBy:               string;
    Description:                string;
    AssignedWorkerName:         string;
    VendName:                   string;
    TrvAppStatus:               string;
    AssignedWorker:             number;
    TotalAmountCur:             number;
    TrvAppStatusLabel:          string;
    ExpenseSettlementTypeLabel: string;
    VendAccount:                string;
    TransferedJournalNum:       string;
    ExpenseReference:           string;
    Import:                     string;
    DimensionCombination:       string;
    OriginWorker:               number;
    ExpenseSettlementType:      string;
  }
  

export interface TPCustom {
    company:            string;
    worker:             number;
    setNewRegister:     any
  }
  
export  interface Supplier {
    "@odata.etag":          string;
    VendorAccountNumber:    string;
    VendorName:             string;
  }
  
export  interface TPros {
    label: string;
    value: string;
  }
  
 export  interface TPropsValues {
    "@odata.etag": string;
    Name:          string;
    Description:   string;
  }

  export interface DialogTitleProps {
  id:               string;
    children?:      React.ReactNode;
    onClose: () =>  void;
  }

  export interface ExponseSettlment { 
    label: string; 
    value: string;
  }