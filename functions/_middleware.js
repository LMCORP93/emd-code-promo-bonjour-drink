export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-code-promo-bonjour-drink.pages.dev') {
    url.hostname = 'code-promo-bonjour-drink.fr';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
