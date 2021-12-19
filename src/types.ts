export interface OrgSettings {
  logoUrl: string;
  logoLightUrl: string;
  slideFooterText: string;
  theme: Record<string, any>;
}

export interface ConfigurableComponentProps {
  organizationSettings: OrgSettings;
}
