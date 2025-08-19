import React from 'react';

const UserManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-2">
            A user is someone who has access to your organization. An organization can have multiple users with different roles and permission levels.
          </p>
        </div>

        {/* Main Users Image */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <img 
              src="/images/settings/user/user.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Who Is a User Section */}
        {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Who Is a User?</h2>
          <p className="text-gray-600 mb-4">
            A user is someone who has access to your organization. An organization can have multiple users, each with different levels of access and responsibilities.
          </p>
        </div> */}

        {/* Add User Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add User</h2>
          <p className="text-gray-600 mb-4">
            As an Business Owner or if you have the permission, you can create new users to your organization:
          </p>
          <ol className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Go to Settings Menu.</li>
            <li>Select Users.</li>
            <li>Click the <strong>"New User"</strong> button on the top right corner of the page.</li>
            <li>Provide the user's <strong>name</strong> <strong>username</strong> ,and <strong>password</strong></li>
            <li>Provide the user's <strong>name</strong> <strong>username</strong> ,and <strong>password</strong></li>
            <li>Assign an appropriate <strong>role</strong></li>
            <li>Click Save.</li>
          </ol>
          <div className="mb-6">
            <img 
              src="/images/settings/user/user-form.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Edit User Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit User</h2>
          <p className="text-gray-600 mb-4">
          After you have added a new user, you can edit their data if required. Here’s how:
          </p>
          <ol className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Go to Settings </li>
            <li>Select the user you want to edit and click down arrow button</li>
            <li>Click Edit.</li>
            <li>Make the required changes and click Save.</li>
          </ol>
          <div className="mb-6  mt-6">
            <img 
              src="/images/settings/user/user-edit.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Update user's name and contact information</li>
            <li>Change assigned roles and permissions</li>
            <li>Modify access levels to specific features</li>
            <li>Update custom field information</li>
          </ul>
          <div className="mb-6  mt-6">
            <img 
              src="/images/settings/user/user-form.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Additional Fields Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Fields for Users</h2>
          <p className="text-gray-600 mb-4">
            To capture more user details, you can create custom fields such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Phone numbers:</strong> Contact information for users</li>
            <li><strong>Email:</strong> Organizational email</li>
            <li><strong>Branch:</strong> Office or branch assignment</li>
          </ul>
        </div>
        {/* User Status Management */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Mark User as Inactive</h2>
          <p className="text-gray-600 mb-4">
            Sometimes, you might want to restrict a user from accessing your organization. In such a case, you can mark a user as inactive. You can make the user active again if you wish.
          </p>
          <p className="text-gray-600 mb-4">
            To mark a user as inactive:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Go to Settings</li>
            <li>Select Users</li>
            <li>Select the user you want to mark as inactive.</li>
            <li>Click Mark as Inactive.</li>
          </ul>
          <div className="mb-6 mt-6">
            <img 
              src="/images/settings/user/user-inactive.png" 
              alt="Users Settings Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Mark User as Active Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Mark User as Active</h2>
          <p className="text-gray-600 mb-4">
            In certain scenarios, there may be a need to change the status of an inactive user to active. In DAS, you have the option to mark an inactive user as active.
          </p>
          <p className="text-gray-600 mb-4">
            To mark a user active:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Go to Settings.</li>
            <li>Select Users</li>
            <li>Select the inactive user you want to mark as active.</li>
            <li>Click Mark as Active.</li>
          </ul>
          <div className="mb-6 mt-6">
            <img 
              src="/images/settings/user/user-active.png" 
              alt="Mark User as Active Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Delete User Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete User</h2>
          <p className="text-gray-600 mb-4">
            You can delete a user whom you no longer want to give access to your DAS organization.
          </p>
          <p className="text-gray-600 mb-4">
            To delete a user:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Go to Settings.</li>
            <li>Select Users</li>
            <li>Select the user whom you want to delete.</li>
            <li>Click Delete.</li>
          </ul>
          <div className="mb-6 mt-6">
            <img 
              src="/images/settings/user/user-delete.png" 
              alt="Delete User Page"
              className="w-full max-w-4xl h-auto border border-gray-200 rounded-lg shadow-sm"
            />
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Warning:</strong> Deleting a user is permanent. Consider marking the user as inactive instead if you want to preserve their data and potentially restore access later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
