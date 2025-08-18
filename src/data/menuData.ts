import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/home',
    icon: 'LayoutDashboard',
    children: [
      { id: 'overview', title: 'Overview - Home', path: '/home/overview' },
      { id: 'custom-dashboards', title: 'Custom Dashboards', path: '/home/custom-dashboards' }
    ]
  },
  {
    id: 'products',
    title: 'Products',
    path: '/products',
    icon: 'Package',
    children: [
      { id: 'products', title: 'Products', path: '/products/products' },
      { id: 'product-groups', title: 'Product Groups', path: '/products/product-groups' },
      { id: 'inventory-adjustments', title: 'Inventory Adjustments', path: '/products/inventory-adjustments' },
      { id: 'transfer-orders', title: 'Transfer Orders', path: '/products/transfer-orders' },
      { id: 'product-categories', title: 'Product Categories', path: '/products/product-categories' },
      { id: 'product-units', title: 'Product Units', path: '/products/product-units' },
      { id: 'convert-product', title: 'Convert Product', path: '/products/convert-product' }
    ]
  },
  {
    id: 'purchases',
    title: 'Purchases',
    path: '/purchases',
    icon: 'ShoppingBag',
    children: [
      { id: 'suppliers', title: 'Suppliers', path: '/purchases/suppliers' },
      { id: 'supplier-group', title: 'Supplier Group', path: '/purchases/supplier-group' },
      { id: 'expenses', title: 'Expenses', path: '/purchases/expenses' },
      { id: 'recurring-expenses', title: 'Recurring Expenses', path: '/purchases/recurring-expenses' },
      { id: 'purchase-orders', title: 'Purchase Orders', path: '/purchases/purchase-orders' },
      { id: 'bills', title: 'Bills', path: '/purchases/bills' },
      { id: 'payments-made', title: 'Payments Made', path: '/purchases/payments-made' },
      { id: 'supplier-credits', title: 'Supplier Credits', path: '/purchases/supplier-credits' }
    ]
  },
  {
    id: 'sales',
    title: 'Sales',
    path: '/sales',
    icon: 'DollarSign',
    children: [
      { id: 'customers', title: 'Customers', path: '/sales/customers' },
      { id: 'customer-groups', title: 'Customer Groups', path: '/sales/customer-groups' },
      { id: 'sales-orders', title: 'Sales Orders', path: '/sales/sales-orders' },
      { id: 'invoices', title: 'Invoices', path: '/sales/invoices' },
      { id: 'payments-received', title: 'Payments Received', path: '/sales/payments-received' },
      { id: 'credit-notes', title: 'Credit Notes', path: '/sales/credit-notes' },
      { id: 'retail-sales', title: 'Retail Sales', path: '/sales/retail-sales' }
    ]
  },
  
  {
    id: 'banking',
    title: 'Banking',
    path: '/banking',
    icon: 'Building'
  },
  {
    id: 'budget',
    title: 'Budget',
    path: '/budget',
    icon: 'CreditCard'
  },
  {
    id: 'accountant',
    title: 'Accountant',
    path: '/accountant',
    icon: 'Users',
    children: [
      { id: 'chart-of-accounts', title: 'Chart of Accounts', path: '/accountant/chart-of-accounts' },
      { id: 'manual-journals', title: 'Manual Journals', path: '/accountant/manual-journals' },
      { id: 'transaction-locking', title: 'Transaction Locking', path: '/accountant/transaction-locking' }
    ]
  },
  {
    id: 'report',
    title: 'Report',
    path: '/report',
    icon: 'Cash'
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/settings',
    icon: 'Settings',
    children: [
      { id: 'advanced-options', title: 'Advanced Options', path: '/settings/advanced-options' },
      { id: 'branches', title: 'Branches', path: '/settings/branches' },
      { id: 'currencies', title: 'Currencies', path: '/settings/currencies' },
      { id: 'delivery-methods', title: 'Delivery Methods', path: '/settings/delivery-methods' },
      { id: 'opening-balances', title: 'Opening Balances', path: '/settings/opening-balances' },
      { id: 'payment-methods', title: 'Payment Methods', path: '/settings/payment-methods' },
      { id: 'payment-modes', title: 'Payment Modes', path: '/settings/payment-modes' },
      { id: 'pos-payment-modes', title: 'Pos Payment Modes', path: '/settings/pos-payment-modes' },
      { id: 'product-conversion-link', title: 'Product Conversion Link', path: '/settings/product-conversion-link' },
      { id: 'profile', title: 'Profile', path: '/settings/profile' },
      { id: 'reasons', title: 'Reasons', path: '/settings/reasons' },
      { id: 'roles', title: 'Roles', path: '/settings/roles' },
      { id: 'sales-persons', title: 'Sales Persons', path: '/settings/sales-persons' },
      { id: 'taxes', title: 'Taxes', path: '/settings/taxes' },
      { id: 'transaction-number-series', title: 'Transaction Number Series', path: '/settings/transaction-number-series' },
      { id: 'users', title: 'Users', path: '/settings/users' },
      { id: 'warehouses', title: 'Warehouses', path: '/settings/warehouses' },
      { id: 'work-center', title: 'Work Center', path: '/settings/work-center' }
    ]
  },
];
