/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Collection,
  IIIFResource,
} from 'manifesto.js';

export namespace Components {
  interface IiifExplorer {
    'copyEnabled': boolean;
    'manifest': string;
    'pageLoadThreshold': string;
    'pageSize': number;
    'pagingEnabled': boolean;
    'pagingLimitKey': string;
    'pagingStartKey': string;
    'searchEnabled': boolean;
    'upLevelEnabled': boolean;
  }
  interface IiifExplorerBreadcrumb {
    'collection': Collection;
    'enabled': boolean;
    'isOpen': boolean;
  }
  interface IiifExplorerItem {
    'copyEnabled': boolean;
    'enabled': boolean;
    'item': IIIFResource;
    'selected': boolean;
  }
}

declare global {


  interface HTMLIiifExplorerElement extends Components.IiifExplorer, HTMLStencilElement {}
  var HTMLIiifExplorerElement: {
    prototype: HTMLIiifExplorerElement;
    new (): HTMLIiifExplorerElement;
  };

  interface HTMLIiifExplorerBreadcrumbElement extends Components.IiifExplorerBreadcrumb, HTMLStencilElement {}
  var HTMLIiifExplorerBreadcrumbElement: {
    prototype: HTMLIiifExplorerBreadcrumbElement;
    new (): HTMLIiifExplorerBreadcrumbElement;
  };

  interface HTMLIiifExplorerItemElement extends Components.IiifExplorerItem, HTMLStencilElement {}
  var HTMLIiifExplorerItemElement: {
    prototype: HTMLIiifExplorerItemElement;
    new (): HTMLIiifExplorerItemElement;
  };
  interface HTMLElementTagNameMap {
    'iiif-explorer': HTMLIiifExplorerElement;
    'iiif-explorer-breadcrumb': HTMLIiifExplorerBreadcrumbElement;
    'iiif-explorer-item': HTMLIiifExplorerItemElement;
  }
}

declare namespace LocalJSX {
  interface IiifExplorer {
    'copyEnabled'?: boolean;
    'manifest'?: string;
    'onSelectCollection'?: (event: CustomEvent<any>) => void;
    'onSelectManifest'?: (event: CustomEvent<any>) => void;
    'pageLoadThreshold'?: string;
    'pageSize'?: number;
    'pagingEnabled'?: boolean;
    'pagingLimitKey'?: string;
    'pagingStartKey'?: string;
    'searchEnabled'?: boolean;
    'upLevelEnabled'?: boolean;
  }
  interface IiifExplorerBreadcrumb {
    'collection'?: Collection;
    'enabled'?: boolean;
    'isOpen'?: boolean;
    'onSelectBreadcrumb'?: (event: CustomEvent<any>) => void;
    'onUpLevel'?: (event: CustomEvent<any>) => void;
  }
  interface IiifExplorerItem {
    'copyEnabled'?: boolean;
    'enabled'?: boolean;
    'item'?: IIIFResource;
    'onSelectItem'?: (event: CustomEvent<any>) => void;
    'selected'?: boolean;
  }

  interface IntrinsicElements {
    'iiif-explorer': IiifExplorer;
    'iiif-explorer-breadcrumb': IiifExplorerBreadcrumb;
    'iiif-explorer-item': IiifExplorerItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'iiif-explorer': LocalJSX.IiifExplorer & JSXBase.HTMLAttributes<HTMLIiifExplorerElement>;
      'iiif-explorer-breadcrumb': LocalJSX.IiifExplorerBreadcrumb & JSXBase.HTMLAttributes<HTMLIiifExplorerBreadcrumbElement>;
      'iiif-explorer-item': LocalJSX.IiifExplorerItem & JSXBase.HTMLAttributes<HTMLIiifExplorerItemElement>;
    }
  }
}


