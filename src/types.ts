export interface RootState {
  isDark: boolean;
  isSidebarOpen: boolean;
  isSignedIn: boolean;
  isLeft: boolean;
  isKillswitchUp: boolean;
  activeLayoutId: number;
  isFullscreen: boolean;
  be_api_url: string;
}

export interface TopicInformation {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  isActive: boolean;
  isMinimized: boolean;
  isDraggable: boolean;
  isResizable: boolean;
  contentName: string;
}

export interface TopicState {
  topicList: TopicInformation[];
}

export interface ModuleInformation {
  icon: string;
  name: string;
  id: number;
}
