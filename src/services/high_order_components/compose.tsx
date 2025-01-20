// compose(withAuth, withTheme)(Page);
type HOC<TProps, TEnhancedProps = TProps> = (component: React.ComponentType<TProps>) => React.ComponentType<TEnhancedProps>;

function compose<TInnerProps, TOuterProps>(...hocs: HOC<any, any>[]): HOC<TInnerProps, TOuterProps> {
  return (BaseComponent: React.ComponentType<TInnerProps>) => hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent as React.ComponentType<any>);
}

export default compose;
