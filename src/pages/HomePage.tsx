import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  CreditCard, 
  Building2, 
  Package,
  BarChart3,
  Settings,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  PieChart,
  Calendar,
  ChevronDown,
  Plus,
  Eye,
  Briefcase,
  Target
} from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dashboard Tab Content
  const dashboardData = {
    totalReceivables: {
      total: 45230,
      current: 32180,
      overdue: 13050
    },
    totalPayables: {
      total: 23890,
      current: 18340,
      overdue: 5550
    },
    cashFlow: {
      cashAsOn: 89450,
      incoming: 124780,
      outgoing: 35330
    },
    incomeExpense: {
      totalIncome: 156780,
      totalExpenses: 78920
    },
    topExpenses: [
      { category: 'Office Supplies', amount: 3450, color: 'bg-blue-500' },
      { category: 'Marketing', amount: 2890, color: 'bg-green-500' },
      { category: 'Travel', amount: 1560, color: 'bg-yellow-500' },
      { category: 'Utilities', amount: 980, color: 'bg-purple-500' },
      { category: 'Others', amount: 980, color: 'bg-gray-500' }
    ],
    projects: [
      { name: 'Website Redesign', client: 'ABC Corp', unbilledHours: 24, unbilledExpenses: 1250 },
      { name: 'Mobile App Dev', client: 'XYZ Ltd', unbilledHours: 18, unbilledExpenses: 890 },
      { name: 'Brand Strategy', client: 'DEF Inc', unbilledHours: 12, unbilledExpenses: 450 }
    ],
    bankAccounts: [
      { name: 'Business Checking', bank: 'Chase Bank', balance: 45230.50, type: 'checking' },
      { name: 'Business Savings', bank: 'Wells Fargo', balance: 89450.00, type: 'savings' },
      { name: 'Credit Card', bank: 'American Express', balance: -5680.25, type: 'credit' }
    ],
    accountWatchlist: [
      { name: 'Petty Cash', balance: 1500, type: 'asset' },
      { name: 'Office Equipment', balance: 25000, type: 'asset' },
      { name: 'Accounts Payable', balance: 12500, type: 'liability' }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  const gettingStartedTasks = [
    { title: 'Set up your organization profile', completed: true },
    { title: 'Add your first bank account', completed: true },
    { title: 'Create your first customer', completed: false },
    { title: 'Create your first item', completed: false },
    { title: 'Create your first invoice', completed: false },
    { title: 'Set up tax preferences', completed: false }
  ];

  const announcements = [
    {
      title: 'New Dashboard Widget: Account Watchlist',
      date: '2024-01-15',
      description: 'Monitor your important account balances in real-time with our new Account Watchlist widget.',
      type: 'feature'
    },
    {
      title: 'Enhanced Cash Flow Reporting',
      date: '2024-01-14',
      description: 'Get better insights into your cash flow with improved reporting and visualization.',
      type: 'update'
    },
    {
      title: 'Multi-Currency Support Enhancement',
      date: '2024-01-12',
      description: 'We have improved our multi-currency handling for better international business support.',
      type: 'feature'
    }
  ];

  const recentUpdates = [
    {
      title: 'Mobile App Performance Improvements',
      date: '2024-01-15',
      description: 'Faster loading times and improved user experience on mobile devices.',
      version: 'v2.4.1'
    },
    {
      title: 'API Rate Limit Increases',
      date: '2024-01-10',
      description: 'Increased API rate limits for better integration performance.',
      version: 'API v3.2'
    },
    {
      title: 'Enhanced Security Features',
      date: '2024-01-05',
      description: 'New two-factor authentication options and improved data encryption.',
      version: 'v2.4.0'
    }
  ];

  const renderDashboardTab = () => (
    <div className="space-y-6">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Receivables */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Receivables</h3>
            <button className="p-1 rounded hover:bg-gray-100">
              <Plus className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(dashboardData.totalReceivables.total)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-center">
                <p className="text-green-600 font-medium">Current</p>
                <p className="text-gray-900">{formatCurrency(dashboardData.totalReceivables.current)}</p>
              </div>
              <div className="text-center">
                <p className="text-red-600 font-medium">Overdue</p>
                <p className="text-gray-900">{formatCurrency(dashboardData.totalReceivables.overdue)}</p>
              </div>
            </div>
            <div className="w-full h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded flex items-center justify-center">
              <div className="text-xs text-gray-600">📊 Receivables Trend</div>
            </div>
          </div>
        </div>

        {/* Total Payables */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Payables</h3>
            <button className="p-1 rounded hover:bg-gray-100">
              <Plus className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(dashboardData.totalPayables.total)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-center">
                <p className="text-green-600 font-medium">Current</p>
                <p className="text-gray-900">{formatCurrency(dashboardData.totalPayables.current)}</p>
              </div>
              <div className="text-center">
                <p className="text-red-600 font-medium">Overdue</p>
                <p className="text-gray-900">{formatCurrency(dashboardData.totalPayables.overdue)}</p>
              </div>
            </div>
            <div className="w-full h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded flex items-center justify-center">
              <div className="text-xs text-gray-600">📈 Payables Overview</div>
            </div>
          </div>
        </div>

        {/* Cash Flow */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Cash Flow</h3>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              This Fiscal Year <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-center">
              <p className="text-sm text-gray-600">Cash as on Dec 31, 2024</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(dashboardData.cashFlow.cashAsOn)}</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-600">Incoming:</span>
                <span className="font-medium">{formatCurrency(dashboardData.cashFlow.incoming)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Outgoing:</span>
                <span className="font-medium">{formatCurrency(dashboardData.cashFlow.outgoing)}</span>
              </div>
            </div>
            <div className="w-full h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
              <div className="text-xs text-gray-600">💰 Cash Flow Graph</div>
            </div>
          </div>
        </div>

        {/* Income and Expense */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Income & Expense</h3>
            <div className="flex items-center space-x-2 text-xs">
              <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Cash</button>
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">Accrual</button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-600">Total Income:</span>
                <span className="font-medium">{formatCurrency(dashboardData.incomeExpense.totalIncome)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Total Expenses:</span>
                <span className="font-medium">{formatCurrency(dashboardData.incomeExpense.totalExpenses)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Net Income:</span>
                <span className="text-green-600">{formatCurrency(dashboardData.incomeExpense.totalIncome - dashboardData.incomeExpense.totalExpenses)}</span>
              </div>
            </div>
            <div className="w-full h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded flex items-center justify-center">
              <div className="text-xs text-gray-600">📊 Income vs Expense</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Expenses */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Expenses</h3>
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              This Fiscal Year <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-2">🥧</div>
                  <div className="text-xs text-gray-600">Top Expenses Breakdown</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {dashboardData.topExpenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${expense.color}`}></div>
                    <span className="text-sm text-gray-700">{expense.category}</span>
                  </div>
                  <span className="text-sm font-medium">{formatCurrency(expense.amount)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded">Unbilled Hours</button>
              <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded">Unbilled Expenses</button>
            </div>
          </div>
          <div className="space-y-3">
            {dashboardData.projects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{project.name}</p>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{project.unbilledHours} hrs</p>
                  <p className="text-xs text-gray-600">{formatCurrency(project.unbilledExpenses)}</p>
                </div>
              </div>
            ))}
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 py-2">
              Show All Projects
            </button>
          </div>
        </div>
      </div>

      {/* Bank Accounts and Account Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bank and Credit Cards */}
        <div className="content-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank and Credit Cards</h3>
          <div className="space-y-3">
            {dashboardData.bankAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{account.name}</p>
                    <p className="text-sm text-gray-600">{account.bank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${account.balance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                    {account.balance < 0 ? '-' : ''}{formatCurrency(account.balance)}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">{account.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Watchlist */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Account Watchlist</h3>
            <div className="flex items-center space-x-2 text-xs">
              <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Accrual</button>
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">Cash</button>
            </div>
          </div>
          <div className="space-y-3">
            {dashboardData.accountWatchlist.map((account, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{account.name}</p>
                  <p className="text-sm text-gray-600 capitalize">{account.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{formatCurrency(account.balance)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderGettingStartedTab = () => (
    <div className="content-card">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Started with DAS</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Setup Checklist</h3>
            <div className="space-y-3">
              {gettingStartedTasks.map((task, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    task.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`}>
                    {task.completed && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className={`${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => navigate('/customers-vendors')}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium">Add Customer</p>
              </button>
              <button 
                onClick={() => navigate('/items')}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors"
              >
                <Package className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">Add Item</p>
              </button>
              <button 
                onClick={() => navigate('/invoices')}
                className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
              >
                <FileText className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-sm font-medium">Create Invoice</p>
              </button>
              <button 
                onClick={() => navigate('/banking')}
                className="p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors"
              >
                <CreditCard className="h-6 w-6 text-yellow-600 mb-2" />
                <p className="text-sm font-medium">Add Bank Account</p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <LayoutDashboard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Need help getting started?</h4>
              <p className="text-sm text-gray-600">Check out our comprehensive documentation and video tutorials.</p>
            </div>
            <button className="ml-auto btn-primary">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnnouncementsTab = () => (
    <div className="content-card">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Announcements</h2>
      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{announcement.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    announcement.type === 'feature' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {announcement.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{announcement.description}</p>
                <p className="text-sm text-gray-500">{announcement.date}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecentUpdatesTab = () => (
    <div className="content-card">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Updates</h2>
      <div className="space-y-4">
        {recentUpdates.map((update, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{update.title}</h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {update.version}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{update.description}</p>
                <p className="text-sm text-gray-500">{update.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="content-card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome to DAS</h1>
            <p className="text-gray-600 mt-2">
              Your comprehensive accounting and business management solution, clearly shows the financial health of your organization.
            </p>
          </div>
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="content-card">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'getting-started', label: 'Getting Started', icon: Target },
              { id: 'announcements', label: 'Announcements', icon: Briefcase },
              { id: 'recent-updates', label: 'Recent Updates', icon: Clock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'dashboard' && renderDashboardTab()}
          {activeTab === 'getting-started' && renderGettingStartedTab()}
          {activeTab === 'announcements' && renderAnnouncementsTab()}
          {activeTab === 'recent-updates' && renderRecentUpdatesTab()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;