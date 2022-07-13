```html
Default value : `auto`
<h1>`width / height: 50px`</h1>
<div class="container container-size-1">
    <div class="content" style="width: 50px; height: 50px;"></div>
</div>
<h1>`width / height: 100%`</h1>
<div class="container container-size-1">
    <div class="content" style="width: 100%; height: 100%;"></div>
</div>
<h1>`width / height: 120%`</h1>
<div class="container container-size-1">
    <div class="content" style="width: 120%; height: 120%;"></div>
</div>
<h1>`width / height: calc(100% - 4px)`</h1>
<div class="container container-size-1">
    <div class="content" style="width: calc(100% - 4px); height: calc(100% - 4px);"></div>
</div>
<h1>`width: min-content`</h1>
Largeur = largeur du plus long mot
<div class="content" style="width: min-content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
</div>
<h1>`width: max-content`</h1>
Largeur = largeur du texte
<div class="content" style="width: max-content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
</div>
<h1>`width: fix-content`</h1>
<h2>Pas assez de place pour afficher le plus grand mot sur une ligne : `min-content` appliqué</h2>
<div class="container w-50px">
    <div class="content" style="width: fit-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
    </div>
</div>
<h2>Pas assez de place pour tout afficher sur une ligne : `auto` appliqué</h2>
<div class="container w-250px h-auto">
    <div class="content" style="width: fit-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
    </div>
</div>
<h2>Trop de place : `max-content` appliqué</h2>
<div class="container" style="width: 500px">
    <div class="content" style="width: fit-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
    </div>
</div>
```

```css
/* border */

.container {
  border: 2px solid red;
}

.container-size-1 {
  height: 100px;
  width: 100px;
}

.content {
  border: 2px solid blue;
  background-color: lightblue;
  width: 100%;
  height: 100%
}

/* width */

.w-auto {
  width: auto;
}

.w-1 {
  width: 100%;
}

.w-50px {
  width: 50px;
}

.w-100px {
  width: 100px;
}

.w-250px {
  width: 250px;
}

.w-500px {
  width: 500px;
}


/* height */

.h-auto {
  height: auto;
}

.h-1 {
  height: 100%;
}

.h-50px {
  height: 50px;
}

.h-100px {
  height: 100px;
}

.h-250px {
  height: 250px;
}

.h-500px {
  height: 500px;
}


```