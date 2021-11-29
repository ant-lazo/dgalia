import { environment } from "environments/environment";

export class ApiRoutes {
  public static baseUrl: string = environment.apiUrl;

  public static warehouse = {
    getList: `${environment.apiUrl}warehouse`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}warehouse?code=${code}`,
    delete: (id: string): string => `${environment.apiUrl}warehouse?id=${id}`,
  };

  public static product = {
    getList: `${environment.apiUrl}product`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}product?code=${code}`,
    findBySupplyCode: (code: string): string =>
      `${environment.apiUrl}product?supply_code=${code}`,
    delete: (code: string): string =>
      `${environment.apiUrl}product?code=${code}`,
  };
  public static bills = {
    getList: `${environment.apiUrl}invoice`,
    getListStatus: `${environment.apiUrl}invoice-status`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}product?code=${code}`,
    findBySupplyCode: (code: string): string =>
      `${environment.apiUrl}product?supply_code=${code}`,
    delete: (code: string): string =>
      `${environment.apiUrl}product?code=${code}`,
    post: `${environment.apiUrl}invoice`,
    put: `${environment.apiUrl}invoice/updatepaid`,
  };

  // public static inputs = {
  //     save: `${environment.apiUrl}inventory/input`,
  // }

  public static outputs = {
    save: `${environment.apiUrl}inventory/output`,
  };

  public static recipes = {
    findByName: (name: string): string =>
      `${environment.apiUrl}recipe?name=${name}`,
  };
  public static subRecipes = {
    findByName: (name: string): string =>
      `${environment.apiUrl}sub-recipe?name=${name}`,
  };

  public static cookingSchedule = {
    save: `${environment.apiUrl}cooking-schedule`,
    //servicio de la tabla del registro de hoja
    getResume: (code: string): string =>
      `${environment.apiUrl}cooking-schedule/resumen?code=${code}`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}cooking-schedule?code=${code}`,
  };

  public static provider = {
    save: `${environment.apiUrl}provider`,
    update: `${environment.apiUrl}provider`,
    getAll: `${environment.apiUrl}provider`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}provider?code=${code}`,
  };

  public static documentType = {
    getAll: `${environment.apiUrl}document-type`,
  };

  public static inventory = {
    getStock: `${environment.apiUrl}inventory/stock`,
    getProdutKardex: (code: string) =>
      `${environment.apiUrl}inventory?product_code=${code}`,
    getProdutKardexByHeadquarter: (code: string, id: Number) =>
      `${environment.apiUrl}inventory/kardex?code=${code}&headquarter=${id}`,
    postRemoveMerchandise: `${environment.apiUrl}inventory/output/cooking_schedule`,
    kardexRerportDownload: (code: string, headquearterId: number): string =>
      `${environment.apiUrl}inventory-kardex-download?code=${code}&headquarter=${headquearterId}`,
    valorationRerportDownload: (code: string): string =>
      `${environment.apiUrl}inventory/valoration?code=${code}`,
  };

  public static purchaseOrder = {
    save: `${environment.apiUrl}purchase-order`,
    getAll: `${environment.apiUrl}purchase-order`,
    updateStatus: `${environment.apiUrl}purchase-order/status`,
    complete: `${environment.apiUrl}purchase-order/status?completed=true`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}purchase-order?code=${code}`,
    getNextCode: (demandSheetCode?: string): string => {
      let url: string = "";
      if (demandSheetCode != null || demandSheetCode != undefined) {
        url = `${environment.apiUrl}purchase-order/next-code?demand_sheet_code=${demandSheetCode}`;
      } else {
        url = `${environment.apiUrl}purchase-order/next-code`;
      }
      return url;
    },
    sendEmail: (code: string): string =>
      `${environment.apiUrl}purchase-order/send-email/pdf?code=${code}`,
    pdfDownload: (code: string): string =>
      `${environment.apiUrl}purchase-order-pdf?code=${code}`,
  };

  public static demandSheet = {
    save: `${environment.apiUrl}demand-sheet`,
    findByCookingScheduleCode: (code: string): string =>
      `${environment.apiUrl}demand-sheet/validate?cooking_schedule_code=${code}`,
    findByCode: (code: string): string =>
      `${environment.apiUrl}demand-sheet?code=${code}`,
    deleteByCode: (code: string): string =>
      `${environment.apiUrl}demand-sheet?code=${code}`,
  };

  public static guide = {
    save: `${environment.apiUrl}referralguide`,
    getAll: `${environment.apiUrl}referralguide`,
  };

  static inputs: any;

  public static reports = {
    getValorationDownload: (code: string, headquarterId: number): string =>
      `${environment.apiUrl}inventory-valoration-download?headquarter=${headquarterId}&code=${code}`,
    getRanking: (start: string, end: string, headquarterId: number): string =>
      `${environment.apiUrl}inventory/ranking?from=${start}&to=${end}&headquarter=${headquarterId}`,
    getRankingDownlad: (
      start: string,
      end: string,
      headquarterId: number
    ): string =>
      `${environment.apiUrl}product-ranking-download?from=${start}&to=${end}&headquarter=${headquarterId}`,
    getRecipe: (headquarterId: number): string =>
      `${environment.apiUrl}recipe?headquarter=${headquarterId}`,
    getRecipeDownload: (headquarterId: number): string =>
      `${environment.apiUrl}recipe-headquarter-download?headquarter=${headquarterId}`,
    getPendingPayment: (headquarterId: number): string =>
      `${environment.apiUrl}invoice?headquarter=${headquarterId}`,
    getPendingPaymentDownload: (headquarterId: number): string =>
      `${environment.apiUrl}invoice-download?headquarter=${headquarterId}`,
  };
}
