import fs from 'fs';
import path from 'path';

// ambil package.json
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

// update dependency jekoneng-web-ui pakai env var dari Vercel
pkg.dependencies['jekoneng-web-ui'] =
  `https://${process.env.GITEA_USERNAME}:${process.env.GITEA_TOKEN}` +
  '@gitea.sev-2.com/refactory/jekoneng-web-ui.git#main';

// simpan ulang
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log('✔️ jekoneng-web-ui dependency updated with credentials');
