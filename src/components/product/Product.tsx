import React from 'react';

const Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-2">
            The Products page in DAS allows you to manage your entire product inventory. From this centralized location, you can view, create, edit, and organize all your products with detailed information including pricing, stock levels, and categories.
          </p>
        </div>

        {/* Main Products Image */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <img 
              src="/images/product/product/product-list.png" 
              alt="Products Main Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Products Overview Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Products Overview</h2>
          <p className="text-gray-600 mb-4">
            The Products page provides a comprehensive view of your inventory with a table format that displays all essential product information. You can manage both goods and services, track inventory levels, and maintain accurate pricing information.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Table Columns</h3>
          <p className="text-gray-600 mb-4">The products table displays the following information for each product:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Product Name:</strong> The display name of your product</li>
            <li><strong>Product Type:</strong> Indicates whether the item is "Goods" or "Services"</li>
            <li><strong>Status:</strong> Shows if the product is "Active" or "Inactive" (indicated by green or gray dots)</li>
            <li><strong>SKU:</strong> Stock Keeping Unit - unique identifier for inventory tracking</li>
            <li><strong>Avg Cost:</strong> Average cost price of the product in your base currency (MMK)</li>
            <li><strong>Stock in Hand:</strong> Current inventory quantity available (shown as "Pcs" for pieces, "unlimited" for services)</li>
            <li><strong>Sales Price:</strong> The selling price of the product in your base currency (MMK)</li>
            <li><strong>Product Category:</strong> Classification group such as "Food", "Beverage", etc.</li>
          </ul>
          <p className="text-gray-600">Each row also includes a product image thumbnail on the left side for quick visual identification.</p>
        </div>

         {/* Bulk Import Section */}
         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Bulk Product Import</h2>
          <p className="text-gray-600 mb-4">For adding multiple products at once:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Click <strong>Download Sample File</strong> to get the import template</li>
            <li>Fill in the template with your product data following the format exactly</li>
            <li>Click <strong>Import Products</strong> to upload your file</li>
            <li>Review the import preview and confirm</li>
            <li>DAS will process and add all valid products to your inventory</li>
          </ol>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">Import Tips:</h4>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Ensure all required fields are filled</li>
              <li>Use consistent naming for categories</li>
              <li>Double-check pricing and quantities</li>
              <li>Keep SKUs unique across all products</li>
            </ul>
          </div>
        </div>

        {/* Available Actions Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Actions</h2>
          <p className="text-gray-600 mb-4">
            The Products page offers several action buttons in the top toolbar:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Export Products:</strong> Download your product list as a file for external use or backup</li>
            <li><strong>Import Updated Products:</strong> Upload changes to existing products via file import</li>
            <li><strong>Download Sample File:</strong> Get a template file showing the correct format for importing products</li>
            <li><strong>Import Products:</strong> Add new products by uploading a properly formatted file</li>
            <li><strong>+ New:</strong> Create a new product manually using the product creation form</li>
          </ul>
          <p className="text-gray-600">These actions help you efficiently manage large product catalogs and maintain data consistency across your system.</p>
        </div>

         {/* Product Status Management Section */}
         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Status Management</h2>
          <p className="text-gray-600 mb-4">
            Product status controls whether items are available for transactions:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Active Products (Green Dot):</strong> Available for sales, purchases, and inventory operations</li>
            <li><strong>Inactive Products (Gray Dot):</strong> Hidden from transaction selections but preserved in historical data</li>
          </ul>
          
          <p className="text-gray-600 mb-4">Deactivating products is useful for:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Discontinued items you no longer sell</li>
            <li>Seasonal products currently out of season</li>
            <li>Items temporarily unavailable</li>
          </ul>
          <p className="text-gray-600">Inactive products remain visible in the products list but cannot be selected in new transactions.</p>
        </div>

        {/* Inventory Tracking Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Tracking</h2>
          <p className="text-gray-600 mb-4">
            DAS provides different inventory tracking methods:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Standard Goods:</strong> Shows exact quantities (e.g., "471 Pcs", "328 Pcs")</li>
            <li><strong>Services:</strong> Displays "unlimited" as they don't have physical inventory</li>
            <li><strong>Non-tracked Items:</strong> May show "0 Pcs" if inventory tracking is disabled</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Stock Level Indicators</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>High stock levels are displayed in normal text</li>
            <li>Low stock situations may be highlighted (if alerts are configured)</li>
            <li>Zero stock items should be reviewed for reordering</li>
          </ul>
          <p className="text-gray-600">Regular inventory audits help maintain accurate stock levels and prevent stockouts.</p>
        </div>

        {/* Product Organization Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Organization</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Categories</h3>
          <p className="text-gray-600 mb-4">Organize products using categories for better management:</p>
          
          <p className="text-gray-600 mb-2"><strong>Common Categories (as shown in your data):</strong></p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Food items</li>
            <li>Beverages</li>
            <li>General goods</li>
          </ul>
          
          <p className="text-gray-600 mb-2"><strong>Benefits of Proper Categorization:</strong></p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Easier product searching and filtering</li>
            <li>Improved reporting and analytics</li>
            <li>Simplified inventory management</li>
            <li>Better sales analysis by category</li>
          </ul>
          <p className="text-gray-600">You can create and manage product categories through the <strong>Product Categories</strong> menu in the Products section.</p>
        </div>

        {/* SKU Best Practices Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">SKU Best Practices</h2>
          <p className="text-gray-600 mb-4">
            Stock Keeping Units (SKUs) help uniquely identify products:
          </p>
          
          <p className="text-gray-600 mb-2"><strong>SKU Examples from your data:</strong></p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>"000016", "000017" - Sequential numbering</li>
            <li>"123" - Custom numbering</li>
            <li>"000002" - Zero-padded format</li>
          </ul>
          
          <p className="text-gray-600 mb-2"><strong>SKU Best Practices:</strong></p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Keep format consistent across all products</li>
            <li>Use meaningful codes when possible</li>
            <li>Avoid special characters that might cause issues</li>
            <li>Consider including category codes in SKUs</li>
            <li>Ensure SKUs remain unique across your entire inventory</li>
          </ul>
          <p className="text-gray-600">Proper SKU management improves inventory accuracy and simplifies product identification.</p>
        </div>

        {/* Pricing Management Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing Management</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Average Cost vs Sales Price</h3>
          <p className="text-gray-600 mb-4">Understanding the relationship between costs and pricing:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Average Cost (shown in your data):</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Tracks the average purchase price of goods</li>
                <li>Updates automatically with new purchases</li>
                <li>Used for profit margin calculations</li>
                <li>Examples: MMK 1,902.34, MMK 9,000, MMK 37,636.36</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Sales Price:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>The price charged to customers</li>
                <li>Set manually based on your pricing strategy</li>
                <li>Should cover costs plus desired profit margin</li>
                <li>Examples: MMK 1,500, MMK 10,000, MMK 15,000</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              <strong>Pricing Analysis:</strong> Monitor the difference between average cost and sales price to ensure healthy profit margins across your product range.
            </p>
          </div>
        </div>

         {/* Search and Navigation Section */}
         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Search and Navigation</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Search</h3>
          <p className="text-gray-600 mb-4">Use the search functionality to quickly locate specific products:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Search by Product Name:</strong> Type partial or complete product names</li>
            <li><strong>Search by SKU:</strong> Enter SKU codes for exact matches</li>
            <li><strong>Search by Category:</strong> Filter by product categories</li>
            <li><strong>Search by Status:</strong> Find active or inactive products</li>
          </ul>
          <p className="text-gray-600 mb-4">The search function works in real-time, updating results as you type.</p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Table Navigation</h3>
          <p className="text-gray-600 mb-4">Navigate through your product list efficiently:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Pagination Controls:</strong> Use the bottom navigation to move between pages</li>
            <li><strong>Refresh Button:</strong> Update the view to show recent changes</li>
            <li><strong>Column Sorting:</strong> Click column headers to sort by different criteria</li>
            <li><strong>Row Selection:</strong> Click any row to view detailed product information</li>
          </ul>
          <p className="text-gray-600">The table displays products in an organized, easy-to-scan format for quick decision-making.</p>
        </div>

        {/* Creating New Products Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Creating New Products</h2>
          <p className="text-gray-600 mb-4">
            Adding new products to your inventory is straightforward using the <strong>+ New</strong> button.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Manual Product Creation</h3>
          <p className="text-gray-600 mb-4">To create a new product manually:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Click the <strong>+ New</strong> button in the top-right corner</li>
            <li>The "New Product" form will open with the following sections:</li>
          </ol>

          <div className="mb-6">
            <img 
              src="/images/product/product/create-form.png" 
              alt="New Product Creation Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Product Name:</strong> Enter the display name for your product (required)</li>
            <li><strong>Product Type:</strong> Select "Goods" for physical items or "Services" for intangible offerings</li>
            <li><strong>Description:</strong> Add detailed product description (optional)</li>
            <li><strong>Product Image:</strong> Upload up to 5 images, each not exceeding 5 MB</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Category:</strong> Select or create a product category for organization</li>
            <li><strong>Unit:</strong> Define the unit of measurement (pieces, kg, liters, etc.)</li>
            <li><strong>Barcode:</strong> Enter product barcode for scanning (optional)</li>
            <li><strong>Revenue Account:</strong> Select the accounting account for sales revenue</li>
            <li><strong>Selling Price:</strong> Set the price in MMK that customers will pay</li>
            <li><strong>Sales Tax:</strong> Choose applicable tax rates for sales</li>
            <li><strong>Cost Account:</strong> Select "Cost of Goods Sold" or relevant cost account</li>
            <li><strong>Cost Price:</strong> Enter the cost price in MMK for profit calculations</li>
            <li><strong>Purchase Tax:</strong> Set tax rates for when you purchase this item</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Inventory Settings</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Track Inventory:</strong> Enable to monitor stock levels automatically</li>
            <li><strong>Is Batch Tracking:</strong> Enable for products that require batch/lot tracking</li>
            <li><strong>Is Expiry Date Tracking:</strong> Enable for products with expiration dates</li>
            <li><strong>Inventory Account:</strong> Select "Inventory Asset" for stock valuation</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Opening Stock</h4>
          <p className="text-gray-600 mb-4">Set initial inventory levels when creating the product:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Warehouse Name:</strong> Select the warehouse location</li>
            <li><strong>Batch Number:</strong> Enter batch information (if batch tracking is enabled)</li>
            <li><strong>Batch Expiry Date:</strong> Set expiration date (if expiry tracking is enabled)</li>
            <li><strong>Opening Stock:</strong> Enter initial quantity available</li>
            <li><strong>Opening Stock Value (Per Unit):</strong> Set the value per unit in MMK</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-800">
              <strong>Tip:</strong> You can add multiple opening stock entries for different warehouses or batches using the "+ Add Opening Stock" button.
            </p>
          </div>

          <p className="text-gray-600 mb-4">After filling all required information:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Review all entered data for accuracy</li>
            <li>Click <strong>Save</strong> to create the product</li>
            <li>The product will immediately appear in your products list</li>
            <li>It will be available for use in sales, purchase, and inventory transactions</li>
          </ol>
        </div>

       

        {/* Managing Existing Products Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Existing Products</h2>
          <p className="text-gray-600 mb-4">
            Once products are created, you can efficiently manage and update them through the product detail view.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Viewing Product Details</h3>
          <p className="text-gray-600 mb-4">To access and view detailed product information:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>From the Products list, click on any product row to open the product details</li>
            <li>The product detail page will open showing comprehensive information organized in tabs:</li>
          </ol>

          <div className="mb-6">
            <img 
              src="/images/product/product/detail.png" 
              alt="Product Detail Overview Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Product Detail Tabs</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Overview:</strong> Shows complete product information including details, pricing, and stock</li>
            <li><strong>Transactions:</strong> Displays all transactions involving this product</li>
            <li><strong>Inventory:</strong> Shows current stock levels and inventory movements</li>
            <li><strong>History:</strong> Tracks all changes made to the product over time</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Product Information Sections</h4>
          <p className="text-gray-600 mb-4">The Overview tab displays the following information:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Product Details:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Product Type (Goods/Services)</li>
                <li>Category classification</li>
                <li>Unit of measurement</li>
                <li>Supplier information</li>
                <li>SKU identifier</li>
                <li>Inventory and Cost accounts</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Financial Information:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Purchase cost price</li>
                <li>Sales selling price</li>
                <li>Revenue account settings</li>
                <li>Tax configurations</li>
                <li>Current stock on hand</li>
                <li>Average cost calculation</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Editing Product Information</h3>
          <p className="text-gray-600 mb-4">To modify existing product details:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>From the product detail page, click the <strong>Edit</strong> button (pencil icon) in the top toolbar
              <div className="mb-6">
              <img 
                src="/images/product/product/edit.png" 
                alt="Product Edit Form"
                className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
              />
            </div>
            </li>

            <li>The product will open in edit mode with all current information pre-filled</li>
          </ol>

          <div className="mb-6">
            <img 
              src="/images/product/product/edit-form.png" 
              alt="Product Edit Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Editable Fields</h4>
          <p className="text-gray-600 mb-4">In edit mode, you can modify the following information:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Basic Information:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Product name</li>
                <li>Product type (Goods/Services)</li>
                <li>Product description</li>
                <li>Product images (add/remove)</li>
                <li>Category assignment</li>
                <li>Unit of measurement</li>
                <li>Barcode information</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Pricing & Accounts:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Revenue account selection</li>
                <li>Selling price in MMK</li>
                <li>Sales tax configuration</li>
                <li>Cost account assignment</li>
                <li>Cost price in MMK</li>
                <li>Purchase tax settings</li>
                <li>Inventory tracking options</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Saving Changes</h4>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>After making all necessary changes to the product information</li>
            <li>Review the modified data for accuracy</li>
            <li>Click <strong>Save</strong> to apply the changes</li>
            <li>Click <strong>Cancel or close button</strong> if you want to discard changes and return to view mode</li>
            <div className="mb-6">
                <img 
                  src="/images/product/product/close-cancel.png" 
                  alt="Product Edit Form"
                  className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
                />
              </div>
          </ol>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Changes are applied immediately after saving and will be reflected in all future transactions. Historical transaction data remains unchanged.
            </p>
          </div>
        </div>

        {/* Product Actions Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Actions</h2>
          <p className="text-gray-600 mb-4">
            Additional actions are available through the "More" dropdown menu in the product detail page:
          </p>

          <div className="mb-6">
            <img 
              src="/images/product/product/inactive-delete.png" 
              alt="Product More Actions Menu"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Actions</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Mark As Inactive:</strong> Deactivate the product to hide it from transaction selections while preserving historical data</li>
            <li><strong>Delete:</strong> Permanently remove the product from the system (use with caution)</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Warning:</strong> Deleting a product is permanent and cannot be undone. Consider marking the product as inactive instead if you want to preserve historical transaction data.
            </p>
          </div>
        </div>

       

       

      </div>
    </div>
  );
};

export default Product;
