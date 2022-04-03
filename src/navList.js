import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';

const navbarList = [
  {
    icon: Search,
    desc: 'Search',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: 'Main',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/'
  },
  {
    icon: DashboardOutlined,
    desc: '구입재료 입고 처리',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/shipment'
  },
  {
    icon: Person,
    desc: '지시진행 및 현황 조회',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/instruction'
  },
  {
    icon: Forum,
    desc: '작업지시이력 조회',
    secondDesc: 'Message from andi',
    badge: 0,
    subList: [],    
    path: '/instruction/history'
  },
  {
    icon: Analytics,
    desc: '조업실적 작업처리 등록',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/work'
  },
  {
    icon: FolderOpen,
    desc: '조업 실적 작업 이력',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/work/history'
  },
  {
    icon: BorderColor,
    desc: '품질 기준 등록',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/quality'
  },
];

export default navbarList;
