import React from 'react';

const Role: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Roles</h1>
          <p className="text-gray-600 mt-2">
          A role refers to the level of accessibility that a user can have in an organization. In DAS, we have standard roles like Admin, Staff, Staff for particular customers, and Timesheet staff.
          </p>
        </div>

        {/* Main Users Image */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <img 
              src="/images/settings/role/role.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Add Custom Role Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Custom Role</h2>
          <p className="text-gray-600 mb-4">
            Apart from the standard roles (such as Admin, Staff, etc.) in DAS, you can add additional roles with different levels of access. These roles are called Custom Roles.
          </p>
          <p className="text-gray-600 mb-4">
            To add a custom role:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>Go to Settings</li>
            <li>Select Roles</li>
            <li>Click the New Role button in the top right corner of the page.</li>
            <li>Select the modules and the level of access you want to provide for the role.</li>
            <li>Click More Permissions for additional access options.</li>
            <li>Click Save.</li>
          </ol>
          <div className="mb-6">
            <img 
              src="/images/settings/role/role-new.png" 
              alt="Add Custom Role Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Edit Role Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit Role</h2>
          <p className="text-gray-600 mb-4">
          After you have added a new role, you can edit their data if required. Here’s how:
          </p>
          <ol className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Go to Settings </li>
            <li>Select the role you want to edit and click down arrow button</li>
            <li>Click Edit.</li>
            <li>Make the required changes and click Save.</li>
          </ol>
          <div className="mb-6">
            <img 
              src="/images/settings/role/role-edit.png" 
              alt="Add Custom Role Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
          <div className="mb-6  mt-6">
            <img 
              src="/images/settings/role/role-edit-save.png" 
              alt="role Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Additional Role clone Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4"> Role clone</h2>
          <p className="text-gray-600 mb-4">
            You can clone a role to create a new role with the same permissions.
          </p>
          <ol className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Go to Settings </li>
            <li>Select the role you want to edit and click down arrow button</li>
            <li>Click Clone.</li>
            <li>Click More Permissions for additional access options.</li>
            <li>Click Save.</li>
          </ol>
          <div className="mb-6  mt-6">
            <img 
              src="/images/settings/role/role-clone.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Role;
