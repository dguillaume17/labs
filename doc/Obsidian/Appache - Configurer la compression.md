# Configurer Appache pour compresser les fichiers lorsqu'on les télécharge
Dans le fichier `httpd.conf`
* Ajouter le module `deflate_module` : compression des fichiers
* Ajouter le module `filter_module` : pour éviter l'erreur `Invalid command 'AddOutputFilterByType'` configuré dans le fichier `.htaccess`

Dans le fichier `.htaccess`

* Soit

```
<IfModule mod_deflate.c>
<FilesMatch "\.(html|php|txt|xml|js|css)$">
SetOutputFilter DEFLATE
</FilesMatch>
</IfModule>
```

* Soit

```
<IfModule mod_deflate.c>  
	# Compress HTML  
	AddOutputFilterByType DEFLATE text/html  

	# Compress Text  
	AddOutputFilterByType DEFLATE text/plain  

	# Compress CSS  
	AddOutputFilterByType DEFLATE text/css  

	# Compress JavaScript  
	AddOutputFilterByType DEFLATE application/javascript  
	AddOutputFilterByType DEFLATE text/javascript  
	AddOutputFilterByType DEFLATE application/x-javascript  

	# Compress Images  
	AddOutputFilterByType DEFLATE image/svg+xml  
	AddOutputFilterByType DEFLATE image/x-icon  

	# Compress Fonts  
	AddOutputFilterByType DEFLATE application/vnd.ms-fontobject  
	AddOutputFilterByType DEFLATE application/x-font  
	AddOutputFilterByType DEFLATE application/x-font-opentype  
	AddOutputFilterByType DEFLATE application/x-font-otf  
	AddOutputFilterByType DEFLATE application/x-font-truetype  
	AddOutputFilterByType DEFLATE application/x-font-ttf  
	AddOutputFilterByType DEFLATE font/opentype  
	AddOutputFilterByType DEFLATE font/otf  
	AddOutputFilterByType DEFLATE font/ttf  

	# Compress XML  
	AddOutputFilterByType DEFLATE application/rss+xml  
	AddOutputFilterByType DEFLATE application/xhtml+xml  
	AddOutputFilterByType DEFLATE application/xml  
	AddOutputFilterByType DEFLATE text/xml  

	# Old browser fixes  
	BrowserMatch ^Mozilla/4 gzip-only-text/html  
	BrowserMatch ^Mozilla/4\.0[678] no-gzip  
	BrowserMatch \bMSIE !no-gzip !gzip-only-text/html  
	Header append Vary User-Agent  
</IfModule>
```

Dans le dossier source
* Ne pas ajouter les fichiers `*.gzip`

# Configurer Appache pour télécharger les fichiers pré-compressés par WebPack
[TODO] : checker car j'ai pas réussi à le faire fonctionnre correctement

Dans le fichier `httpd.conf`
* Ajouter le module `headers_module` : ajouter/modifier les headers HTTP

Dans le dossier source
* Ajouter uniquement les fichiers `*.gzip`

# Comment vérifier que le navigateur télécharge bien les fichiers compressés ?

* Aller dans l'onglet `network` des Dev Tools
* Vérifier les headers HTTP en réponse :
	* Content-Encoding: gzip


