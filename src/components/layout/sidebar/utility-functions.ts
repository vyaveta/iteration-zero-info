export function checkIsActive(href: string, item: any, mainNav = false) {
    return (
      href === item.url || // /endpint?search=param
      href.split('?')[0] === item.url || // endpoint
      !!item?.items?.filter((i: any) => i.url === href).length || // if child nav is active
      (mainNav &&
        href.split('/')[1] !== '' &&
        href.split('/')[1] === item?.url?.split('/')[1])
    )
  }