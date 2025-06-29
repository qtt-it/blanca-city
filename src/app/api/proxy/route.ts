import { NextResponse } from 'next/server';

export async function GET() {
  const targetUrl = "https://360batdongsan.com/360-sun-vung-tau/";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html",
      },
      // Quan trọng: bỏ theo dõi redirect vì Next sẽ chặn nếu cross-origin
      redirect: 'follow',
      cache: 'no-store',
    });

    const html = await response.text();

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error: any) {
    return new NextResponse(`Proxy failed: ${error.message}`, { status: 500 });
  }
}