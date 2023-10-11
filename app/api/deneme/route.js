const handler = function (res,req) {
  return Response.json({ name: 'John Doe' });
}
export { handler as GET, handler as POST };