import { createGlyphComponent } from '../createGlyphComponent';
import { LGGlyph } from '../types';

// Glyphs
import ActivityFeed from './ActivityFeed.svg';
import AddFile from './AddFile.svg';
import Apps from './Apps.svg';
import Array from './Array.svg';
import ArrowDown from './ArrowDown.svg';
import ArrowLeft from './ArrowLeft.svg';
import ArrowRight from './ArrowRight.svg';
import ArrowUp from './ArrowUp.svg';
import Beaker from './Beaker.svg';
import Bell from './Bell.svg';
import Biometric from './Biometric.svg';
import Building from './Building.svg';
import Bulb from './Bulb.svg';
import Calendar from './Calendar.svg';
import CaretDown from './CaretDown.svg';
import CaretLeft from './CaretLeft.svg';
import CaretRight from './CaretRight.svg';
import CaretUp from './CaretUp.svg';
import Charts from './Charts.svg';
import Checkmark from './Checkmark.svg';
import CheckmarkWithCircle from './CheckmarkWithCircle.svg';
import ChevronDown from './ChevronDown.svg';
import ChevronLeft from './ChevronLeft.svg';
import ChevronRight from './ChevronRight.svg';
import ChevronUp from './ChevronUp.svg';
import Clock from './Clock.svg';
import ClockWithArrow from './ClockWithArrow.svg';
import Clone from './Clone.svg';
import Cloud from './Cloud.svg';
import Code from './Code.svg';
import Connect from './Connect.svg';
import Copy from './Copy.svg';
import CreditCard from './CreditCard.svg';
import CurlyBraces from './CurlyBraces.svg';
import Cursor from './Cursor.svg';
import Database from './Database.svg';
import Diagram from './Diagram.svg';
import Diagram2 from './Diagram2.svg';
import Diagram3 from './Diagram3.svg';
import Disconnect from './Disconnect.svg';
import Download from './Download.svg';
import Drag from './Drag.svg';
import Edit from './Edit.svg';
import Ellipsis from './Ellipsis.svg';
import Email from './Email.svg';
import Export from './Export.svg';
import Favorite from './Favorite.svg';
import File from './File.svg';
import Filter from './Filter.svg';
import Folder from './Folder.svg';
import FullScreenEnter from './FullScreenEnter.svg';
import FullScreenExit from './FullScreenExit.svg';
import GlobeAmericas from './GlobeAmericas.svg';
import GovernmentBuilding from './GovernmentBuilding.svg';
import Home from './Home.svg';
import Import from './Import.svg';
import ImportantWithCircle from './ImportantWithCircle.svg';
import InfoWithCircle from './InfoWithCircle.svg';
import InviteUser from './InviteUser.svg';
import Key from './Key.svg';
import Laptop from './Laptop.svg';
import Link from './Link.svg';
import Lock from './Lock.svg';
import MagnifyingGlass from './MagnifyingGlass.svg';
import Megaphone from './Megaphone.svg';
import Menu from './Menu.svg';
import Minus from './Minus.svg';
import NotAllowed from './NotAllowed.svg';
import Note from './Note.svg';
import OpenNewTab from './OpenNewTab.svg';
import Pause from './Pause.svg';
import Person from './Person.svg';
import PersonGroup from './PersonGroup.svg';
import PersonWithLock from './PersonWithLock.svg';
import Play from './Play.svg';
import Plus from './Plus.svg';
import PlusWithCircle from './PlusWithCircle.svg';
import QuestionMarkWithCircle from './QuestionMarkWithCircle.svg';
import Read from './Read.svg';
import Redo from './Redo.svg';
import Refresh from './Refresh.svg';
import Relationship from './Relationship.svg';
import ReplicaSet from './ReplicaSet.svg';
import Resize from './Resize.svg';
import Save from './Save.svg';
import Serverless from './Serverless.svg';
import Settings from './Settings.svg';
import ShardedCluster from './ShardedCluster.svg';
import Shell from './Shell.svg';
import SMS from './SMS.svg';
import SortAscending from './SortAscending.svg';
import SortDescending from './SortDescending.svg';
import SplitHorizontal from './SplitHorizontal.svg';
import SplitVertical from './SplitVertical.svg';
import Stitch from './Stitch.svg';
import Support from './Support.svg';
import Sweep from './Sweep.svg';
import Table from './Table.svg';
import TimeSeries from './TimeSeries.svg';
import Trash from './Trash.svg';
import Undo from './Undo.svg';
import University from './University.svg';
import Unlock from './Unlock.svg';
import Unsorted from './Unsorted.svg';
import UpDownCarets from './UpDownCarets.svg';
import Upload from './Upload.svg';
import VerticalEllipsis from './VerticalEllipsis.svg';
import Visibility from './Visibility.svg';
import VisibilityOff from './VisibilityOff.svg';
import Warning from './Warning.svg';
import Write from './Write.svg';
import X from './X.svg';
import XWithCircle from './XWithCircle.svg';

const _glyphs = {
  ActivityFeed,
  AddFile,
  Apps,
  Array,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Beaker,
  Bell,
  Biometric,
  Building,
  Bulb,
  Calendar,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Charts,
  Checkmark,
  CheckmarkWithCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  ClockWithArrow,
  Clone,
  Cloud,
  Code,
  Connect,
  Copy,
  CreditCard,
  CurlyBraces,
  Cursor,
  Database,
  Diagram,
  Diagram2,
  Diagram3,
  Disconnect,
  Download,
  Drag,
  Edit,
  Ellipsis,
  Email,
  Export,
  Favorite,
  File,
  Filter,
  FullScreenEnter,
  FullScreenExit,
  Folder,
  GlobeAmericas,
  GovernmentBuilding,
  Home,
  Import,
  ImportantWithCircle,
  InfoWithCircle,
  InviteUser,
  Key,
  Laptop,
  Link,
  Lock,
  MagnifyingGlass,
  Megaphone,
  Menu,
  Minus,
  NotAllowed,
  Note,
  OpenNewTab,
  Pause,
  Person,
  PersonGroup,
  PersonWithLock,
  Play,
  Plus,
  PlusWithCircle,
  QuestionMarkWithCircle,
  Read,
  Redo,
  Refresh,
  Relationship,
  ReplicaSet,
  Resize,
  Save,
  Serverless,
  ShardedCluster,
  Settings,
  Shell,
  SMS,
  SortAscending,
  SortDescending,
  SplitHorizontal,
  SplitVertical,
  Stitch,
  Support,
  Sweep,
  Table,
  TimeSeries,
  Trash,
  Undo,
  University,
  Unlock,
  Unsorted,
  UpDownCarets,
  Upload,
  VerticalEllipsis,
  Visibility,
  VisibilityOff,
  Warning,
  Write,
  X,
  XWithCircle,
} as const;

export type GlyphName = keyof typeof _glyphs;

const glyphKeys = Object.keys(_glyphs) as Array<GlyphName>;

export const glyphs = glyphKeys.reduce((acc, name) => {
  acc[name] = createGlyphComponent(name, _glyphs[name]);

  return acc;
}, {} as Record<GlyphName, LGGlyph.Component>);
