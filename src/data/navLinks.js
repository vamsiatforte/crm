import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import QuizIcon from '@mui/icons-material/Quiz';
import PublicIcon from '@mui/icons-material/Public';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/manager/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: 'Projects',
    icon: <WorkIcon />,
    children: [
      { label: 'Companies', path: '/manager/projects/companies', icon: <BusinessIcon /> },
      { label: 'Setup', path: '/manager/projects/setup', icon: <SettingsIcon /> },
      { label: 'Export', path: '/manager/projects/export', icon: <ImportExportIcon /> },
      { label: 'Questionnaires', path: '/manager/projects/questionnaires', icon: <QuizIcon /> },
      { label: 'Web Portal', path: '/manager/projects/webportal', icon: <PublicIcon /> },
    ]
  },
  {
    label: 'Performance',
    path: '/manager/performance',
    icon: <AssessmentIcon />,
  },
];

export default navLinks;
