import React from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';
import {DashboardPanelExtension} from 'devexpress-dashboard/common';
import OnlineMapItem from './items/OnlineMapItem';
import WebPageItem from './items/WebPageItem';
import SimpleTableItem from './items/SimpleTableItem';
import PolarChartItem from './items/PolarChartItem';
import GanttItem from './items/GanttItem';
import ParameterItem from './items/ParameterItem';
import TreeViewItem from './items/HierarchicalTreeViewItem';
import FunnelD3Item from './items/FunnelD3Item';

function onBeforeRender(e) { 
  var dashboardControl = e.component;
  dashboardControl.registerExtension(new DashboardPanelExtension(dashboardControl));
  dashboardControl.registerExtension(new SimpleTableItem(dashboardControl));
  dashboardControl.registerExtension(new PolarChartItem(dashboardControl));
  dashboardControl.registerExtension(new ParameterItem(dashboardControl));
  dashboardControl.registerExtension(new OnlineMapItem(dashboardControl));
  dashboardControl.registerExtension(new WebPageItem(dashboardControl));
  dashboardControl.registerExtension(new GanttItem(dashboardControl));
  dashboardControl.registerExtension(new TreeViewItem(dashboardControl));
  dashboardControl.registerExtension(new FunnelD3Item(dashboardControl));
}

function App() {  
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl style={{ height: '100%' }} 
        endpoint="http://localhost:5000/api/dashboard"        
        onBeforeRender = { onBeforeRender }>        
      </DashboardControl>
  </div>
  );
}

export default App;