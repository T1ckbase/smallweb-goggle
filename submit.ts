interface GogglesSubmitResponse {
  success: boolean;
  goggle?: {
    goggleID: string;
    name: string;
    transferred_from?: string;
    [key: string]: any;
  };
  errors?: [number, string][];
  message?: string;
}

async function submitGoggle(goggleUrl: string): Promise<GogglesSubmitResponse> {
  const endpoint = new URL('https://search.brave.com/api/goggles/submit');
  endpoint.searchParams.set('url', goggleUrl);

  const res = await fetch(endpoint, { method: 'POST' });

  if (!res.ok) {
    throw new Error(`Failed to submit Goggle: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}

const result = await submitGoggle(
  'https://raw.githubusercontent.com/T1ckbase/smallweb-goggle/refs/heads/master/smallweb.goggle',
);
console.log(result);
