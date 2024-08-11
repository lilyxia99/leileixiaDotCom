import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "instagram": "https://instagram.com/lilyxia99",
      "vimeo":"www.vimeo.com/leileixia"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "collapse", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
      useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
  // Sort order: folders first, then files. Sort folders and files alphabetically
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "🍊 " + node.displayName
          } else {
            node.displayName = "🌳 " + node.displayName
          }
        }
      },
    })),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    //Component.Graph(),
    //Component.MobileOnly(Component.Explorer()),
    
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "🍊 " + node.displayName
          } else {
            node.displayName = "🌳 " + node.displayName
          }
        }
      },
    })),
  ],
  right: [],
}
