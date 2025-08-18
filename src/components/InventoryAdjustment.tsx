import React from 'react';

const InventoryAdjustment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Inventory Adjustments</h1>
          <p className="text-gray-600 mt-2">
            Inventory Adjustments in DAS allow you to correct discrepancies between your actual physical inventory and the recorded quantities in the system. This feature helps maintain accurate inventory records by adjusting both quantity and value differences.
          </p>
        </div>

        {/* Main Inventory Adjustments Image */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <img 
              src="/images/inv-adjust/list.png" 
              alt="Inventory Adjustments Main Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Adjustments Overview</h2>
          <p className="text-gray-600 mb-4">
            Inventory adjustments are essential for maintaining accurate stock records. They help reconcile differences that may arise due to theft, damage, measurement errors, or other discrepancies between physical counts and system records.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Types of Adjustments</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Quantity Adjustment:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Adjusts the physical quantity of items</li>
                <li>Increases or decreases stock on hand</li>
                <li>Updates inventory asset values automatically</li>
                <li>Used for physical count discrepancies</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Value Adjustment:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Adjusts the monetary value of inventory</li>
                <li>Changes cost price without affecting quantity</li>
                <li>Updates total inventory value</li>
                <li>Used for cost corrections or write-downs</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">When to Use Inventory Adjustments</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Physical Count Discrepancies:</strong> When actual counts differ from system records</li>
            <li><strong>Damaged Goods:</strong> Reducing inventory for damaged or unusable items</li>
            <li><strong>Theft or Loss:</strong> Adjusting for missing inventory</li>
            <li><strong>Cost Corrections:</strong> Updating inventory values due to price changes</li>
            <li><strong>Expired Products:</strong> Writing off expired merchandise</li>
            <li><strong>System Errors:</strong> Correcting data entry mistakes</li>
          </ul>
        </div>

        {/* Creating Quantity Adjustments Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Creating Quantity Adjustments</h2>
          <p className="text-gray-600 mb-4">
            Quantity adjustments modify the physical stock levels of your products.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 1: Start New Quantity Adjustment</h3>
          <p className="text-gray-600 mb-4">Click the <strong>+ New</strong> button and ensure "Quantity Adjustment" is selected:</p>

          <div className="mb-6">
            <img 
              src="/images/inv-adjust/form2.png" 
              alt="New Quantity Adjustment Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Mode of Adjustment:</strong> Select "Quantity Adjustment" radio button</li>
            <li><strong>Date:</strong> Set the date when the adjustment is being made</li>
            <li><strong>Reason:</strong> Select from predefined reasons or create custom reasons</li>
            <li><strong>Reference #:</strong> Optional reference number for tracking</li>
            <li><strong>Description:</strong> Detailed explanation of why the adjustment is needed</li>
            <li><strong>Account:</strong> Usually "Cost of Goods Sold" for quantity adjustments</li>
            <li><strong>Branch:</strong> Select the branch where the adjustment applies</li>
            <li><strong>Warehouse Name:</strong> Choose the specific warehouse location</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Product Selection and Adjustment</h4>
          <p className="text-gray-600 mb-4">The form displays a table with the following columns:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Product Details:</strong> Shows product name and SKU</li>
            <li><strong>Quantity Available:</strong> Current stock quantity in the system</li>
            <li><strong>Cost Price:</strong> Current cost per unit</li>
            <li><strong>New Quantity on Hand:</strong> The corrected quantity after physical count</li>
            <li><strong>Quantity Adjusted:</strong> Automatically calculated difference (positive or negative)</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <strong>Example:</strong> If system shows 119 pieces but physical count is 114, enter 114 in "New Quantity on Hand" and the system will show -5 in "Quantity Adjusted".
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Adding Products</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Add New Row:</strong> Click to add individual products one by one</li>
            <li><strong>Add Products in Bulk:</strong> Import multiple products from a file or list</li>
            <li><strong>Search Products:</strong> Use the search feature to find specific items</li>
            <li><strong>Remove Products:</strong> Delete rows for products not needing adjustment</li>
          </ul>
        </div>

        {/* Creating Value Adjustments Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Creating Value Adjustments</h2>
          <p className="text-gray-600 mb-4">
            Value adjustments modify the monetary value of inventory without changing physical quantities.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 1: Start New Value Adjustment</h3>
          <p className="text-gray-600 mb-4">Select "Value Adjustment" mode when creating a new adjustment:</p>

          <div className="mb-6">
            <img 
              src="/images/inv-adjust/form.png" 
              alt="New Value Adjustment Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Value Adjustment Fields</h4>
          <p className="text-gray-600 mb-4">Value adjustments have additional columns for monetary changes:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Current Value:</strong> Shows the current total value of the product (MMK)</li>
            <li><strong>Changed Value:</strong> Enter the new total value for the product</li>
            <li><strong>Adjusted Value:</strong> Automatically calculated difference in value</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-800">
              <strong>Use Case:</strong> If the cost price of a product has changed due to market conditions, use value adjustment to update the inventory value without changing the physical quantity.
            </p>
          </div>
        </div>

        {/* Processing Adjustments Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing and Managing Adjustments</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Saving and Finalizing</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Review all product adjustments for accuracy</li>
            <li>Verify the adjustment amounts and directions (positive/negative)</li>
            <li>Add any supporting attachments if needed (up to 5 files, 5MB each)</li>
            <li>Click <strong>Save</strong> to create the adjustment</li>
            <li>The system will automatically update inventory records and accounting entries</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Viewing Adjustment Details</h3>
          <p className="text-gray-600 mb-4">After creating an adjustment, you can view its details:</p>

          <div className="mb-6">
            <img 
              src="/images/inv-adjust/detail.png" 
              alt="Inventory Adjustment Detail View"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Adjustment Detail Information</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Header Information:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Adjustment date and reason</li>
                <li>Account and branch details</li>
                <li>Adjustment type and status</li>
                <li>Reference number</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Product Details:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>List of adjusted products</li>
                <li>Quantity or value changes</li>
                <li>Individual product adjustments</li>
                <li>Total impact summary</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Journal Entries</h4>
          <p className="text-gray-600 mb-4">The system automatically generates accounting entries:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Inventory Asset:</strong> Increases or decreases based on adjustment</li>
            <li><strong>Cost of Goods Sold:</strong> Balancing entry for the adjustment</li>
            <li><strong>Automated Posting:</strong> Entries are posted automatically to maintain accounting accuracy</li>
          </ul>
        </div>

        {/* Multiple Products Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Adjusting Multiple Products</h2>
          <p className="text-gray-600 mb-4">
            DAS allows you to adjust multiple products in a single adjustment transaction.
          </p>

          <div className="mb-6">
            <img 
              src="/images/inv-adjust/form-with-pro-slect.png" 
              alt="Multiple Products Adjustment"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits of Bulk Adjustments</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Efficiency:</strong> Process multiple products in one transaction</li>
            <li><strong>Consistency:</strong> Same date, reason, and reference for related adjustments</li>
            <li><strong>Audit Trail:</strong> Single document for multiple product changes</li>
            <li><strong>Time Saving:</strong> Reduce administrative work for large adjustments</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Adding Multiple Products</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Click <strong>Add New Row</strong> for each additional product</li>
            <li>Use <strong>Add Products in Bulk</strong> to import from a list</li>
            <li>Search and select products from your inventory</li>
            <li>Enter adjustment quantities or values for each product</li>
            <li>Review the total impact before saving</li>
          </ol>
        </div>


      </div>
    </div>
  );
};

export default InventoryAdjustment;
