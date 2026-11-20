const body = `# Lone Mountain Heights | Dr. Jan Duffy

> Weekend open houses, MLS search, and private tours around Lone Mountain, Las Vegas, NV 89129, by Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties.

## Pages
- [Home](https://www.lonemountainhomesforsale.com/)
- [Homes for sale (MLS)](https://www.lonemountainhomesforsale.com/search)
- [Open houses](https://www.lonemountainhomesforsale.com/open-houses)
- [Tour homes](https://www.lonemountainhomesforsale.com/tour)
- [Lone Mountain neighborhood](https://www.lonemountainhomesforsale.com/neighborhoods/lone-mountain)
- [Contact](https://www.lonemountainhomesforsale.com/contact)
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
