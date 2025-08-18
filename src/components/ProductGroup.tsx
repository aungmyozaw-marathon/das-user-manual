import React from 'react';

const ProductGroup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Product Groups</h1>
          <p className="text-gray-600 mt-2">
            Product Groups in DAS allow you to manage products with multiple variants efficiently. Unlike individual products, product groups enable you to create a parent product with different variations such as size, color, or other attributes, all managed under one umbrella.
          </p>
        </div>

        {/* Main Product Groups Image */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <img 
              src="/images/product-group/list.png" 
              alt="Product Groups Main Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Product Groups Overview Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Groups Overview</h2>
          <p className="text-gray-600 mb-4">
            Product Groups provide a powerful way to manage products that come in multiple variations. Instead of creating separate products for each variant, you can create one product group that contains all the variations, making inventory management and sales more efficient.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Differences from Individual Products</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Individual Products:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Single item with fixed attributes</li>
                <li>One SKU, one price, one inventory count</li>
                <li>Simple management structure</li>
                <li>Direct transaction usage</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Product Groups:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Parent product with multiple variants</li>
                <li>Multiple SKUs, prices, and inventory counts</li>
                <li>Complex management with variant options</li>
                <li>Variant-specific transactions</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">When to Use Product Groups</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Clothing Items:</strong> T-shirts with different sizes (S, M, L, XL) and colors</li>
            <li><strong>Electronics:</strong> Phones with different storage capacities or colors</li>
            <li><strong>Food Items:</strong> Beverages in different sizes (Small, Medium, Large)</li>
            <li><strong>Books:</strong> Same title in different formats (Hardcover, Paperback, Digital)</li>
          </ul>
        </div>

        {/* Creating New Product Groups Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Creating New Product Groups</h2>
          <p className="text-gray-600 mb-4">
            Creating a product group involves setting up the base product information and then defining the variants.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 1: Basic Product Group Setup</h3>
          <p className="text-gray-600 mb-4">Start by clicking the <strong>+ New</strong> button to open the product group creation form:</p>

          <div className="mb-6">
            <img 
              src="/images/product-group/form.png" 
              alt="New Product Group Creation Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Product Details Tab</h4>
          <p className="text-gray-600 mb-4">Fill in the basic information for your product group:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Product Group Name:</strong> Enter the main name that represents all variants</li>
            <li><strong>Description:</strong> Detailed description of the product group</li>
            <li><strong>Product Images:</strong> Upload images representing the product group</li>
            <li><strong>Category:</strong> Select appropriate product category</li>
            <li><strong>Unit:</strong> Define the unit of measurement</li>
            <li><strong>Supplier:</strong> Set the default supplier information</li>
            <li><strong>Revenue Account:</strong> Configure sales revenue account</li>
            <li><strong>Sales Tax:</strong> Set applicable tax rates</li>
            <li><strong>Cost Account:</strong> Configure cost accounting</li>
            <li><strong>Purchase Tax:</strong> Set purchase tax rates</li>
            <li><strong>Track Inventory:</strong> Enable inventory tracking for all variants</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 2: Creating Variants</h3>
          <p className="text-gray-600 mb-4">The key difference in product groups is the ability to create variants:</p>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Adding Variant Options</h4>
          <p className="text-gray-600 mb-4">Click <strong>Add Variants</strong> to define the variation types:</p>

          <div className="mb-6">
            <img 
              src="/images/product-group/form-variant.png" 
              alt="Add Variants Modal"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Option Name:</strong> Name of the variant type (e.g., "Size", "Color", "Material")</li>
            <li><strong>Option Values:</strong> Specific values for each variant (e.g., "Small", "Medium", "Large")</li>
            <li><strong>Add Option Value:</strong> Use the "+ Add Option Value" to include multiple options</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <strong>Example:</strong> For a T-shirt product group, you might create a "Size" option with values "Small", "Medium", "Large", and "Extra Large".
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Variant Combinations</h4>
          <p className="text-gray-600 mb-4">After defining variant options, DAS automatically creates combinations:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Product Name:</strong> Shows the variant combination (e.g., "Large", "Small")</li>
            <li><strong>Selling Price (MMK):</strong> Set individual prices for each variant</li>
            <li><strong>Cost Price (MMK):</strong> Define cost for each variant</li>
            <li><strong>Barcode:</strong> Assign unique barcodes to each variant</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              <strong>Tip:</strong> Use "Copy to All" buttons to quickly apply the same price or cost to all variants, then modify individual variants as needed.
            </p>
          </div>
        </div>

        {/* Managing Product Groups Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Managing Existing Product Groups</h2>
          <p className="text-gray-600 mb-4">
            Managing product groups follows the same pattern as individual products, with additional variant-specific options.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Viewing Product Group Details</h3>
          <p className="text-gray-600 mb-4">Click on any product group from the list to view its details:</p>

          <div className="mb-6">
            <img 
              src="/images/product-group/detail.png" 
              alt="Product Group Detail View"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Editing Product Groups</h3>
          <p className="text-gray-600 mb-4">To modify a product group:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Click the <strong>Edit</strong> button (pencil icon) from the product group detail page</li>
            <li>The edit form opens with all current information pre-filled</li>
          </ol>

          <div className="mb-6">
            <img 
              src="/images/product-group/edit.png" 
              alt="Edit Product Group Form"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">What You Can Edit</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2"><strong>Base Information:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Product group name and description</li>
                <li>Images and category</li>
                <li>Units and supplier information</li>
                <li>Account configurations</li>
                <li>Tax settings</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600 mb-2"><strong>Variant-Specific:</strong></p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Add or remove variant options</li>
                <li>Modify variant values</li>
                <li>Update individual variant prices</li>
                <li>Change variant barcodes</li>
                <li>Adjust inventory settings per variant</li>
              </ul>
            </div>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default ProductGroup;
