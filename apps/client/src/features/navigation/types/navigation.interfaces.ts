export interface NavigationLink {
  destination: string;
  label: string;
}

export interface NavigationItemComponentProps extends NavigationLink {
  open: boolean;
  className?: string;
}
