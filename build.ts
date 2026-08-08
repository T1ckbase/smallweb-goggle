import smallweb from 'smallweb' with { type: 'text' };

const BOOST = 3;
const BOOST_OVERRIDES: Record<string, number> = {
  'github.com': 1,
};

let goggle = `! name: Kagi Small Web
! description: shows only Kagi Small Web sites
! public: true
! author: T1ckbase
! homepage: https://github.com/T1ckbase/smallweb-goggle
! issues: https://github.com/T1ckbase/smallweb-goggle/issues
! avatar: #ffb319

$discard

! Copyright (c) 2023 Kagi Search
!
! Permission is hereby granted, free of charge, to any person obtaining a copy
! of this software and associated documentation files (the "Software"), to deal
! in the Software without restriction, including without limitation the rights
! to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
! copies of the Software, and to permit persons to whom the Software is
! furnished to do so, subject to the following conditions:
!
! The above copyright notice and this permission notice shall be included in all
! copies or substantial portions of the Software.
!
! THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
! IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
! FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
! AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
! LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
! OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
! SOFTWARE.

`;

for (const url of smallweb.trim().split(/\r\n|\n|\r/)) {
  const { hostname } = new URL(url);
  const boost = BOOST_OVERRIDES[hostname] ?? BOOST;
  goggle += `$boost=${boost},site=${hostname}\n`;
}

Deno.writeTextFileSync('./smallweb.goggle', goggle);
