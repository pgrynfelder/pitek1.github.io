export const onInitialClientRender = () => {
  const ref = new URLSearchParams(window.location.search).get("ref") ?? ""
  const staszicAlert =
    ref.match(
      /^(http:\/\/|http:\\|)pitek\.(w|home)\.staszic\.waw\.pl(|\/(.*))$/g
    ) !== null

  if (staszicAlert) document.getElementById("open-staszic").click()
}
