import React from 'react';

const DashboardOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Home</h1>
        <p className="text-gray-600 mt-1">
          When you log in to DAS, you will first see the <em>Home</em> page, which clearly shows the financial health of your organization.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Dashboard Tab Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Dashboard Tab</h2>
          <p className="text-gray-600 mb-6">
            The <em>Dashboard</em> tab in DAS provides a clear view of your finances. You can easily track your income, expenses, bank balances, project time logs, and outstanding amounts. It also includes visual charts that allow you to monitor your business's financial performance at a glance.
          </p>
          
          {/* Total Receivables Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Receivables</h3>
            <p className="text-gray-600 mb-4">
              In DAS, the <em>Total Receivables</em> panel displays the amount your customers owe you. It is divided into two sections:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li><strong>Current:</strong> The amount yet to be received for invoices that haven't crossed the payment due date.</li>
              <li><strong>Overdue:</strong> The amount yet to be received for invoices that have crossed the payment due date.</li>
            </ul>
            
            
            {/* Dashboard Image 2 - New Button Dropdown */}
            <div className="mb-6">
              <img 
                src="/images/dashboard/dashboard-totol-receiable.png" 
                alt="Total Receivables New Button Dropdown showing New Invoice and New Customer Payment options"
                className="w-full max-w-2xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
            
            <p className="text-gray-600 mb-4">
              You can click the <strong>Current</strong> or <strong>Overdue</strong> amount under <em>Total Receivables</em> to view the <strong>AR Aging Details By Invoice Due Date</strong> report.
            </p>
            
            <p className="text-gray-600 mb-2">To create new transactions within this tab:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Click <strong>+ New</strong> in the top right corner of the panel.</li>
              <li>In the dropdown, you can create the following transactions:</li>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Invoice</li>
                <li>Customer Payment</li>
              </ul>
            </ul>
            
            {/* Dashboard Image 3 - Basic Total Receivables Panel */}
            <div className="mb-6">
              <img 
                src="/images/dashboard/dashboard-receiable-new.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-gray-600 mb-4">
            Additionally, by clicking the drop-down next to the <strong>Overdue</strong> amount, you can choose the desired time range.
            </p>

            <div className="mb-6">
              <img 
                src="/images/dashboard/dashboard-receiable-overdule.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

          </div>
          
          {/* Total Payables Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Payables</h3>
            <p className="text-gray-600 mb-4">
              In DAS, the <em>Total Payables</em> panel displays the amount you owe your vendors. It is divided into two sections:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li><strong>Current:</strong> The amount you have yet to pay for purchase transactions that haven't crossed the payment due date.</li>
              <li><strong>Overdue:</strong> The amount you have yet to pay for purchase transactions that have crossed the payment due date.</li>
            </ul>
            
            {/* Dashboard Image 4 - Total Payables Panel */}
            <div className="mb-6">
              <img 
                src="/images/dashboard/payable/payable.png" 
                alt="Total Payables Panel showing Current: MMK 0 and Overdue: MMK 14,068,500"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
            
            <p className="text-gray-600 mb-4">
              You can click the <strong>Current</strong> or <strong>Overdue</strong> amount under <em>Total Payables</em> to view the <strong>AP Aging Details By Bill Due Date</strong> report.
            </p>
            
            <p className="text-gray-600 mb-2">To create new transactions within this panel:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Click <strong>+ New</strong> in the top right corner of the panel.</li>
              <li>In the dropdown, you can create the following transactions:</li>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Bill</li>
                <li>Supplier Payment</li>
              </ul>
            </ul>
            <div className="mb-6">
              <img 
                src="/images/dashboard/payable/payable-new.png" 
                alt="Total Payables Panel showing Current: MMK 0 and Overdue: MMK 14,068,500"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-gray-600 mb-4">
            Additionally, by clicking the drop-down next to the <strong>Overdue</strong> amount, you can choose the desired time range.
            </p>

            <div className="mb-6">
              <img 
                src="/images/dashboard/payable/payable-overdue.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
          </div>
          
          {/* Cash Flow Section */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow</h3>
            <p className="text-gray-600 mb-4">
              In DAS, the <em>Cash Flow</em> panel shows the cash flowing in and out of your organization. The <strong>Cash Flow Graph</strong> is generated based on your organization's cash flow report. This graph is shown based on the following three sections:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><strong>Cash as on "Date":</strong> This displays the cash you had at the beginning and the end of your fiscal year.</li>
              <li><strong>Incoming:</strong> The sum of debit entries from banks, cards, cash, and payment clearing accounts.</li>
              <li><strong>Outgoing:</strong> The sum of credit entries from banks, cards, cash, and payment clearing accounts.</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>Insight:</strong> The graph is made using the direct method, where you can calculate the difference between the total cash spent and the total cash received by your organisation. The cash flow statement report uses the indirect method, which includes non-cash expenses like depreciation and inventory adjustments. For instance, you can calculate the difference between the net income and a purchase you haven't paid for.
              </p>
            </div>

            <div className="mb-6">
              <img 
                src="/images/dashboard/cashflow.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-gray-600 mb-2">You can customize the cash flow graph based on different time periods:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Click on <strong>This Fiscal Year</strong> in the top right corner of the panel.</li>
              <li>Choose the desired timeline from the dropdown.</li>
            </ul>

            <div className="mb-6">
              <img 
                src="/images/dashboard/cashflow-fiscal.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Income and Expense Section */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Income and Expense</h3>
            <p className="text-gray-600 mb-4">
              In DAS, the <em>Income and Expense</em> panel shows the total income and expenses of your organization. It is divided into two sections:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><strong>Total Income:</strong> Shows the amount received from sales transactions and bank deposits.</li>
              <li><strong>Total Expenses:</strong> Shows the amount spent on purchase transactions and bank withdrawals.</li>
            </ul>
            <div className="mb-6">
              <img 
                src="/images/dashboard/income-expense.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
            <p className="text-gray-600 mb-2">To customize the Income and Expenses graph based on different time periods:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Click <strong>This Fiscal Year</strong> in the top right corner of the panel.</li>
              <li>Choose the desired timeline from the dropdown.</li>
            </ul>
            <div className="mb-6">
              <img 
                src="/images/dashboard/income-expense-fiscal.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Top Expenses Section */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Expenses</h3>
            <p className="text-gray-600 mb-4">
              In the <em>Top Expenses</em> panel, the pie chart shows all the top expenses recorded in DAS. Click on any section of the pie chart to view the corresponding transactions in reports.
            </p>

            <div className="mb-6">
              <img 
                src="/images/dashboard/expense.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-gray-600 mb-2">To customize your top expenses based on different time periods:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>Click <strong>This Fiscal Year</strong> in the top right corner of the panel.</li>
              <li>Choose the desired timeline from the dropdown.</li>
            </ul>

            <div className="mb-6">
              <img 
                src="/images/dashboard/expense-fiscal.png" 
                alt="Total Receivables Panel showing Current: MMK 0 and Overdue: MMK 142,000"
                className="w-full max-w-xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;