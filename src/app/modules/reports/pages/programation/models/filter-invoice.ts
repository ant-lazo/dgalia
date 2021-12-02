import { PurchaseOrder } from "app/modules/purchase-order/models/ purchase-order.model";

export interface FilterInvoice {
  id: number;
  purchaseOrder: PurchaseOrder;
  invoiceStatus: InvoiceStatus;
  code: string;
  invoiceDate: string;
  dueDate: string;
  comments: string;
  paidDate: string;
  paidComments: string;
  createdBy: CreatedBy;
  createdAt: string;
  updatedAt: string;
  providerDocument: string;
}

export interface InvoiceStatus {
  id: number;
  code: string;
  name: string;
  description: string;
}

export interface Headquarter {
  id: number;
  name: string;
  description: string;
  address: string;
  personInCharge: string;
  email: string;
  enabled: boolean;
  color: string;
}

interface CreatedBy {
  id: number;
  fullname: string;
  email: string;
}
