import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';

import { default as CheckCircle } from './check-circle';
import { default as CheckboxBlank } from './checkbox-blank';
import { default as CheckboxChecked } from './checkbox-checked';
import { default as CheckboxIndeterminate } from './checkbox-indeterminate';
import { default as Close } from './close';
import { default as Apps } from './apps';
import { default as Error } from './error';
import { default as ExpandMore } from './expand-more';
import { default as Info } from './info';
import { default as Loader } from './loader';
import { default as Place } from './place';
import { default as RadioChecked } from './radio-checked';
import { default as RadioUnchecked } from './radio-unchecked';
import { default as Search } from './search';
import { default as Visibility } from './visibility';
import { default as VisibilityOff } from './visibility-off';
import { default as AddUser } from './add-user';
// App icons
import { default as Home } from './home';
import { default as Chat } from './chat';
import { default as Governance } from './governance';
import { default as Book } from './book';
import { default as Newspaper } from './newspaper';
import { default as Safe } from './safe';
import { default as Team } from './team';
//
import { default as Token } from './token';
import { default as More } from './more';
import { default as MoreLine } from './more-line';

import { default as ArrowDropdown } from './arrow-dropdown';
// AppNavs
import { default as SurveyLine } from './survey-line';
import { default as SettingsLine } from './settings-line';
import { default as ParentLine } from './parent-line';
//
import { default as MicOn } from './mic-on';
import { default as MicOff } from './mic-off';
import { default as DMs } from './direct-messages';
import { default as Wallet } from './wallet';
import { default as ChatLine } from './chat-new';
import { default as Apps2 } from './apps-2';
import { default as BookLine } from './book-line';
import { default as GovernanceLine } from './governance-line';
import { default as AppBallotSM } from './app-ballot-sm';

import { default as NewspaperLine } from './newspaper-line';
import { default as SafeLine } from './safe-line';
import { default as TeamLine } from './team-line';

import { default as DraftLine } from './draft-line';
import { default as Calendar } from './calendar';
import { default as AngleLeft } from './angle-left';
import { default as AngleRight } from './angle-right';
import { default as ArrowLeft } from './arrow-left';
import { default as ArrowRight } from './arrow-right';
import { default as Percentage } from './percentage';
import { default as TerminalLine } from './terminal-line';
import { default as ListOptions } from './list-options';
//
import { default as Participants } from './participants';
import { default as Leave } from './leave';

// Blockchains
import { default as Ethereum } from './ethereum';
import { default as Uqbar } from './uqbar';

//
export { default as TlonIcon } from './tlon-icon';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

export const Icons: any = {
  Apps,
  AppBallotSM,
  AddUser,
  ArrowLeft,
  ArrowRight,
  AngleLeft,
  AngleRight,
  Calendar,
  CheckCircle,
  CheckboxBlank,
  CheckboxChecked,
  CheckboxIndeterminate,
  Close,
  DraftLine,
  Error,
  ExpandMore,
  Info,
  Loader,
  Place,
  RadioChecked,
  RadioUnchecked,
  Search,
  Visibility,
  VisibilityOff,
  Home,
  Chat,
  ChatLine,
  Book,
  BookLine,
  Governance,
  GovernanceLine,
  Newspaper,
  NewspaperLine,
  Safe,
  SafeLine,
  Team,
  TeamLine,
  Token,
  More,
  MoreLine,
  ArrowDropdown,
  SurveyLine,
  SettingsLine,
  ParentLine,
  MicOn,
  MicOff,
  DMs,
  Wallet,
  Apps2,
  Ethereum,
  Uqbar,
  Percentage,
  TerminalLine,
  ListOptions,
  Participants,
  Leave,
};
