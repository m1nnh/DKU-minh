var scene, camera, renderer, container;
var light, shadowLight, backLight;
var controls, fieldOfView, aspectRatio, nearPlane, farPlane;
var floor, heart, heart0, heart1, heart2, heart3, heart4, doggo;
var mouse, rayCaster, domEvents, clock, speed, delta;
var WIDTH, HEIGHT, windowHalfX, windowHalfY, dist;

function init(){
    scene = new THREE.Scene();
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2000;

    camera = new THREE.PerspectiveCamera(fieldOfView,aspectRatio,nearPlane,farPlane);
    camera.position.set(350, 250, 700);   

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );
    renderer.shadowMapEnabled = true;

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    window.addEventListener('resize', onWindowResize, false);
    controls = new THREE.OrbitControls( camera, renderer.domElement);
    domEvents = new THREEx.DomEvents(camera, renderer.domElement);
}

function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}
  
function summonLights() {
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5);
    
    shadowLight = new THREE.DirectionalLight(0xffffff, .8);
    shadowLight.position.set(200, 200, 200);
    shadowLight.castShadow = true;
    shadowLight.shadowDarkness = .2;
       
    backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(-100, 200, 50);
    backLight.shadowDarkness = .1;
    backLight.castShadow = true;
       
    scene.add(backLight);
    scene.add(light);
    scene.add(shadowLight);
}
  
function summonFloor(){ 
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 800), new THREE.MeshBasicMaterial({color: 0xe6e6e6}));
    floor.rotation.x = -Math.PI/2;
    floor.position.y = -80;
    floor.receiveShadow = true;
    scene.add(floor);
}
  
function summonDoggo(){
    doggo = new Doggo();
    doggo.position.set(0, 0, 0);
    scene.add(doggo);
}

function summonHeart(){
    heart = new Heart();
    heart.position.set(-200, 100, 80);
    scene.add(heart);
}
/* grouping */
var doggos = new THREE.Group();
var doggo_head = new THREE.Group();
var doggo_torso = new THREE.Group();
var doggo_body = new THREE.Group();
var doggo_legs = new THREE.Group();
var left_apdari1 = new THREE.Group();
var left_apdari2 = new THREE.Group();
var right_apdari1 = new THREE.Group(); 
var right_apdari2 = new THREE.Group();
var left_duitdari = new THREE.Group();
var right_duitdari = new THREE.Group();
var doggo_tail = new THREE.Group();
var doggo_eyes = new THREE.Group();
var heartu = new THREE.Group();
var neye1, neye2, neye3, neye4, neye5, neye6, neye7, neye8, neye9, neye10;
var neweye1 = new THREE.Group();
var neweye2 = new THREE.Group();

function Doggo(){
    /* doggo head */
    var head = new THREE.Mesh(
        new THREE.BoxGeometry( 150,150,100 ), 
        new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } )
      );
    head.position.set(0, 100, 0);
    head.castShadow = true;
    head.receiveShadow = true;

    var leftear = new THREE.Mesh(
        new THREE.BoxGeometry( 30, 50, 70), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    /*var leftearline = new THREE.Mesh(
        new THREE.BoxGeometry( 35, 55, 75), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.BackSide })
    );*/
    leftear.position.set(-60, 200, 0);
    leftear.castShadow = true;
    leftear.receiveShadow = true;
    var small_leftear = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 15, 60), 
        new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    small_leftear.position.set(-60, 182, 10);
    small_leftear.castShadow = true;
    small_leftear.receiveShadow = true;

    var rightear = new THREE.Mesh(
        new THREE.BoxGeometry( 30, 50, 70), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    rightear.position.set(60, 200, 0);
    rightear.castShadow = true;
    rightear.receiveShadow = true;
    var small_rightear = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 15, 60), 
        new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    small_rightear.position.set(60, 182, 10);
    small_rightear.castShadow = true;
    small_rightear.receiveShadow = true;

    var lefteye = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    var righteye = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    lefteye.position.set(-50, 130, 50);
    righteye.position.set(50,  130, 50);
    lefteye.castShadow = true;
    righteye.castShadow = true;
    lefteye.receiveShadow = true;
    righteye.receiveShadow = true;

    var bignose = new THREE.Mesh(
        new THREE.BoxGeometry( 60, 50, 30), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    bignose.position.set(0, 80, 70);
    bignose.castShadow = true;
    bignose.receiveShadow = true;

    var nose = new THREE.Mesh(
        new THREE.BoxGeometry( 30, 10, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    nose.position.set(0, 95, 85);
    nose.castShadow = true;
    nose.receiveShadow = true;

    var lips1 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 30, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    lips1.position.set(0, 85, 85);
    lips1.castShadow = true;
    lips1.receiveShadow = true;
    
    var lips2 = new THREE.Mesh(
        new THREE.BoxGeometry( 40, 3, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    lips2.position.set(0, 70, 85);
    lips2.castShadow = true;
    lips2.receiveShadow = true;
    
    var lips3 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 9, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    lips3.position.set(-20, 73.2, 85);
    lips3.castShadow = true;
    lips3.receiveShadow = true;

    var lips4 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 9, 10), 
        new THREE.MeshPhongMaterial( {color: 0x3c3c3c, flatShading: true })
    );
    lips4.position.set(20, 73.2, 85);
    lips4.castShadow = true;
    lips4.receiveShadow = true;

    doggo_head.add(head);
    doggo_head.add(leftear);
    doggo_head.add(small_leftear);
    doggo_head.add(rightear);
    doggo_head.add(small_rightear);
    doggo_eyes.add(lefteye);
    doggo_eyes.add(righteye);
    doggo_head.add(doggo_eyes);
    doggo_head.add(bignose);
    doggo_head.add(nose);
    doggo_head.add(lips1);
    doggo_head.add(lips2);
    doggo_head.add(lips3);
    doggo_head.add(lips4);

    /* doggo body */
    var torso = new THREE.Mesh(
        new THREE.BoxGeometry( 180, 140, 140), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    torso.position.x = 0;
    torso.position.y = 48;
    torso.position.z = -120;
    torso.castShadow = true;
    torso.receiveShadow = true;

    /* doggo tail */
    var tail1 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 30), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    tail1.position.set(0, 120, -200);
    tail1.castShadow = true;
    tail1.receiveShadow = true;
    
    var tail2 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 30), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    tail2.position.set(0, 145, -215);
    tail2.castShadow = true;
    tail2.receiveShadow = true;

    var tail3 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 30), 
        new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    tail3.position.set(0, 170, -200);
    tail3.castShadow = true;
    tail3.receiveShadow = true;

    doggo_tail.add(tail1);
    doggo_tail.add(tail2);
    doggo_tail.add(tail3);

    /* doggo legs - apdaris */
    var l_apdari1 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 40, 30), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    l_apdari1.position.set(-75, -40, -65);
    l_apdari1.castShadow = true;
    l_apdari1.receiveShadow = true;
    var l_apdari2 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 40), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    l_apdari2.position.set(-75, -70, -60);
    l_apdari2.castShadow = true;
    l_apdari2.receiveShadow = true;
    
    var apclaw1 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    apclaw1.position.set(-81, -77, -44);
    apclaw1.castShadow = true;
    apclaw1.receiveShadow = true;
    var apclaw2 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    apclaw2.position.set(-68, -77, -44);
    apclaw2.castShadow = true;
    apclaw2.receiveShadow = true;

    var r_apdari1 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 40, 30), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    r_apdari1.position.set(75, -40, -65);
    r_apdari1.castShadow = true;
    r_apdari1.receiveShadow = true;
    var r_apdari2 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 40), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    r_apdari2.position.set(75, -70, -60);
    r_apdari2.castShadow = true;
    r_apdari2.receiveShadow = true;

    var apclaw3 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    apclaw3.position.set(68, -77, -44);
    apclaw3.castShadow = true;
    apclaw3.receiveShadow = true;
    var apclaw4 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    apclaw4.position.set(81, -77, -44);
    apclaw4.castShadow = true;
    apclaw4.receiveShadow = true;

    left_apdari1.add(l_apdari1);
    left_apdari1.add(l_apdari2);
    right_apdari1.add(r_apdari1);
    right_apdari2.add(r_apdari2);
    left_apdari1.add(apclaw1);
    left_apdari1.add(apclaw2);
    right_apdari2.add(apclaw3);
    right_apdari2.add(apclaw4);
    doggo_legs.add(left_apdari1);
    doggo_legs.add(left_apdari2);
    doggo_legs.add(right_apdari1);
    doggo_legs.add(right_apdari2);

    /* doggo legs - duitdaris */
    var l_duitdari1 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 99, 30), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    l_duitdari1.position.set(-75, -35, -200);
    l_duitdari1.castShadow = true;
    l_duitdari1.receiveShadow = true;
    var l_duitdari2 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 40), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    l_duitdari2.position.set(-75, -70, -180);
    l_duitdari2.castShadow = true;
    l_duitdari2.receiveShadow = true;

    var duitclaw1 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    duitclaw1.position.set(-81, -77, -165);
    duitclaw1.castShadow = true;
    duitclaw1.receiveShadow = true;
    var duitclaw2 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    duitclaw2.position.set(-68, -77, -165);
    duitclaw2.castShadow = true;
    duitclaw2.receiveShadow = true;
    
    var r_duitdari1 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 99, 30), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    r_duitdari1.position.set(75, -35, -200);
    r_duitdari1.castShadow = true;
    r_duitdari1.receiveShadow = true;
    var r_duitdari2 = new THREE.Mesh( 
        new THREE.BoxGeometry( 30, 30, 40), new THREE.MeshPhongMaterial( {color: 0xffffff, flatShading: true })
    );
    r_duitdari2.position.set(75, -70, -180);
    r_duitdari2.castShadow = true;
    r_duitdari2.receiveShadow = true;

    var duitclaw3 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    duitclaw3.position.set(68, -77, -165);
    duitclaw3.castShadow = true;
    duitclaw3.receiveShadow = true;
    var duitclaw4 = new THREE.Mesh(
        new THREE.BoxGeometry( 3, 15, 15), new THREE.MeshPhongMaterial( {color: 0xc6c6c6, flatShading: true })
    );
    duitclaw4.position.set(81, -77, -165);
    duitclaw4.castShadow = true;
    duitclaw4.receiveShadow = true;

    left_duitdari.add(l_duitdari1);
    left_duitdari.add(l_duitdari2);
    right_duitdari.add(r_duitdari1);
    right_duitdari.add(r_duitdari2);
    left_duitdari.add(duitclaw1);
    left_duitdari.add(duitclaw2);
    right_duitdari.add(duitclaw3);
    right_duitdari.add(duitclaw4);
    doggo_legs.add(left_duitdari);
    doggo_legs.add(right_duitdari);

    doggo_legs.position.set(0,0,0);

    doggo_torso.add(torso);
    doggo_body.add(doggo_tail);
    doggo_body.add(doggo_legs);
    doggos.add(doggo_head);
    doggos.add(doggo_body);
    doggos.add(doggo_torso);
    doggos.position.set(0,0,0);
    doggos.rotation.set(0,0,0);

    domEvents.addEventListener(doggos,'mousedown', onDoggoMouseDown, false);
    return doggos;
}

function Heart(){
    heart0 = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10), new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true})
    );
    heart0.position.x = 0;
    heart0.position.y = -20;
    heart0.position.z = 0; 

    heart1 = new THREE.Mesh(
        new THREE.BoxGeometry( 28, 10, 10), new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true})
    );
    heart1.position.x = 0;
    heart1.position.y = -10;
    heart1.position.z = 0;

    heart2 = new THREE.Mesh(
        new THREE.BoxGeometry( 40, 10, 10), new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true})
    );
    heart2.position.x = 0;
    heart2.position.y = 0;
    heart2.position.z = 0;
     
    heart3 = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10), new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true})
    );
    heart3.position.x = -10;
    heart3.position.y = 10;
    heart3.position.z = 0;
    
    heart4 = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10), new THREE.MeshPhongMaterial({color: 0xff0000, flatShading: true})
    );
    heart4.position.x = 10;
    heart4.position.y = 10;
    heart4.position.z = 0;

    heart0.castShadow = true;
    heart0.receiveShadow = true;
    heart1.castShadow = true;
    heart1.receiveShadow = true;
    heart2.castShadow = true;
    heart2.receiveShadow = true;
    heart3.castShadow = true;
    heart3.receiveShadow = true;
    heart4.castShadow = true;
    heart4.receiveShadow = true;
    heartu.add(heart0);
    heartu.add(heart1);
    heartu.add(heart2);
    heartu.add(heart3);
    heartu.add(heart4);

    return heartu;
}

function summonHiddenEyes(){
    neye1 = new THREE.Mesh(
        new THREE.BoxGeometry( 6, 6, 10), new THREE.MeshPhongMaterial({color: 0x000000, flatShading: true})
    );
    neye1.castShadow = true;
    neye1.receiveShadow = true;
    neye2 = neye1.clone();
    neye3 = neye1.clone();
    neye4 = neye1.clone();
    neye5 = neye1.clone();
    neye1.position.set(-56, 136, 50);
    neye2.position.set(-50, 130, 50);
    neye3.position.set(-44, 124, 50);
    neye4.position.set(-50, 118, 50);
    neye5.position.set(-56, 112, 50);
    
    neweye1.add(neye1);
    neweye1.add(neye2);
    neweye1.add(neye3);
    neweye1.add(neye4);
    neweye1.add(neye5);
   
    neye6 = neye1.clone();
    neye7 = neye1.clone();
    neye8 = neye1.clone();
    neye9 = neye1.clone();
    neye10 = neye1.clone();
    neye6.position.set(56, 136, 50);
    neye7.position.set(50, 130, 50);
    neye8.position.set(44, 124, 50);
    neye9.position.set(50, 118, 50);
    neye10.position.set(56, 112, 50);
    
    neweye2.add(neye6);
    neweye2.add(neye7);
    neweye2.add(neye8);
    neweye2.add(neye9);
    neweye2.add(neye10);
    neweye1.position.set(0,0,-50);
    neweye2.position.set(0,0,-50);
    //neweye1.traverse( function ( object) { object.visible = false; });
    //neweye2.traverse( function ( object) { object.visible = false; });
    doggo_head.add(neweye1);
    doggo_head.add(neweye2);
}

/* Doggo Motions */
var step = 0; 
var tailSwing = 0;
var isAnimating = 0;

function swinging(){
    step += 0.2;
    tailSwing += 0.2;
    doggo_tail.rotation.z = 0.3 * (Math.cos(tailSwing));
    if (isAnimating === 1){;
    }
    else {
        doggo_head.position.x = 3 * (Math.cos(step)); 
        doggo_head.position.y = 3 * Math.abs(Math.sin(step));
        doggo_torso.position.y = Math.cos(step); 
    }
}

/*function closeEyes(){
    doggo_eyes.traverse( function ( object ) { object.visible = false; } );
    neweye1.traverse( function ( object) { object.visible = true; });
    neweye2.traverse( function ( object) { object.visible = true; });
}
function openEyes(){
    doggo_eyes.traverse( function ( object ) { object.visible = true; } );
    neweye1.traverse( function ( object) { object.visible = false; });
    neweye2.traverse( function ( object) { object.visible = false; });
}*/

function onDoggoMouseDown(event){
    if (isAnimating === 1)
        return ;
    doggo_eyes.position.z = -50;
    neweye1.position.z = 0;
    neweye2.position.z = 0;
    //doggo_eyes.traverse( function ( object ) { object.visible = false; } );
    //neweye1.traverse( function ( object) { object.visible = true; });
    //neweye2.traverse( function ( object) { object.visible = true; });
    setTimeout(function(){
        doggo_eyes.position.z = 0;
        neweye1.position.z = -50;
        neweye2.position.z = -50;
     //doggo_eyes.traverse( function ( object ) { object.visible = true; } );
    //neweye1.traverse( function ( object) { object.visible = false; });
    //neweye2.traverse( function ( object) { object.visible = false; });
    }, 500);
}


function animate(){
    heartu.rotation.y += 0.15;
    swinging();
    render();
    requestAnimationFrame(animate);
}

function render(){
    renderer.render(scene, camera);
}

init();
summonLights();
summonFloor();
summonDoggo();
summonHiddenEyes();
summonHeart();
animate();