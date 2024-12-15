import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  color: transparent; /* Makes the text invisible */
  margin: 0;
  margin-top:20px;
  background-image: url("https://leileixia.online/images/My-name-as-logo.gif");
  background-position:center;
  background-size:contain;
  min-height: 150px;
  background-repeat:no-repeat;
  text-shadow: 5px 5px 5px #558ABB;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
