/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-grass-5', 'assets/level/background-1/bg-grass-5.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-stone-1', 'assets/level/background-1/bg-stone-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');


        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gleft', 'assets/level/ground/g-left.png');
        this.load.image('gbigstone', 'assets/level/ground/g-big-stone.png');
        this.load.image('gstone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gstone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gbox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gwoodenbridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gwater', 'assets/level/ground/g-water.png');
        this.load.image('gtree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gspike1', 'assets/level/ground/g-spike-1.png');
        this.load.image('gfellen1', 'assets/level/ground/g-fellen-tree-1.png');


        this.load.image('z3', 'assets/zombies/z3.png');
        this.load.image('z6', 'assets/zombies/z6.png');
        this.load.image('z15', 'assets/zombies/z15.png');
        this.load.image('z10', 'assets/zombies/z10.png');

        this.load.image('gvinea', 'assets/level/ground/g-vine-a.png');
        this.load.image('gvineb', 'assets/level/ground/g-vine-b.png');
        this.load.image('gvinec', 'assets/level/ground/g-vine-c.png');

        for (let i = 1; i <= 3; i++) {
            this.load.image('weather' + i, 'assets/level/weather/rain/frame' + i + '.png');
        }


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for (let i = 1; i <= 5; i++) {
            this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for (let i = 1; i <= 3; i++) {
            this.load.image('filterFilm' + i, 'assets/level/filters/film/frame-' + i + '.png');
        }

        for (let i = 1; i <= 9; i++) {
            this.load.image('B' + i, 'assets/characters/boy/boy_style_5/PNG/die/Layer-' + i + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple

        for (let i = 1; i <= 3; i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');
        }
    }


    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-70, 'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.setTintFill
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.setScale(0.6)
        // bg2Tree2.angle=-5 pencher l'arbre de -5 degrès
        let bg2terrain1=this.add.image(720,300, 'bg2-terrain-1').setOrigin(0,0);

        bg2terrain1.setTintFill
        this.bg2Container.add(bg2terrain1);
        bg2terrain1.setScale(0.4)
        bg2terrain1.angle=-40
        let bg2tree3=this.add.image(710,-20, 'bg2-tree-3').setOrigin(0,0);
        bg2tree3.setTintFill
        this.bg2Container.add(bg2tree3);
        bg2tree3.setScale(0.6)
        bg2tree3.angle=-15






        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(-120,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */

        let bg1Terrain3=this.add.image(-270,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bgtree1=this.add.image(90,350, 'bg1-tree-1').setOrigin(0,1);
        bgtree1.setTintFill
        this.bg1Container.add(bgtree1);
        bgtree1.setScale(0.6)
        let bgtree3=this.add.image(315,290, 'bg1-tree-3').setOrigin(0,1);
        bgtree3.setTintFill
        this.bg1Container.add(bgtree3);
        bgtree3.setScale(0.6)
        let bg1terrain1=this.add.image(790,534, 'bg1-terrain-1').setOrigin(0,1);
        bg1terrain1.setTintFill
        this.bg1Container.add(bg1terrain1);
        bg1terrain1.setScale(0.5)

        let bggrass5=this.add.image(740,490, 'bg1-grass-5').setOrigin(0,1);
        bggrass5.setTintFill
        this.bg1Container.add(bggrass5);
        bggrass5.angle=-10
        bggrass5.setScale(0.7)

        let bgstone1=this.add.image(610,615, 'bg1-stone-1').setOrigin(0,1);
        bgstone1.setTintFill
        this.bg1Container.add(bgstone1);
        bgstone1.setScale(7)

        /// let bgtreee2=this.add.image(900,610, 'bg1-tree-2').setOrigin(0,1);
        /// bgtreee2.setTintFill
        ///this.bg1Container.add(bgtree1);
        ///bgtreee2.setScale(0.6)
        ///bgtreee2.flipY=true

        let bgtree2=this.add.image(1010,370, 'bg1-tree-2').setOrigin(0,1);   310
        bgtree2.setTintFill
        this.bg1Container.add(bgtree2);
        bgtree2.setScale(0.6)
        bgtree2.flipX=true

        let bg1terrain4=this.add.image(1090,534, 'bg1-terrain-4').setOrigin(0,1);
        bg1terrain4.setTintFill
        this.bg1Container.add(bg1terrain4);
        bg1terrain4.setScale(0.5)



        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(-100,20);

        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(1000,390, 'gTree1').setOrigin(0.4,1.03);
        tree1.setTintFill //(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        tree1.flipX=true
        tree1.angle=-7
        tree1.setScale(0.9)

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom1=this.add.image(250,356, 'gMushroom1').setOrigin(0,1);
        mushroom1.setTintFill;
        this.groundContainer.add(mushroom1);
        mushroom1.flipX=true;

        let bridge=this.add.image(580,390, 'gwoodenbridge').setOrigin(0,1);
        bridge.setTintFill;
        this.groundContainer.add(bridge);
        bridge.setScale(0.7)
        let bstone=this.add.image(420,550, 'gbigstone').setOrigin(0,1);
        bstone.setTintFill;
        this.groundContainer.add(bstone);
        bstone.setScale(0.8)
        let tree2=this.add.image(400,370, 'gtree2').setOrigin(0,1);
        tree2.setTintFill
        this.groundContainer.add(tree2);
        tree2.setScale(0.7)
        let treee2=this.add.image(105,430, 'gtree2').setOrigin(0,1);
        treee2.setTintFill
        this.groundContainer.add(treee2);
        treee2.flipX=true;
        let water=this.add.image(550,615, 'gwater').setOrigin(0,1);
        water.setTintFill
        this.groundContainer.add(water);
        let box=this.add.image(655,357, 'gbox2').setOrigin(0,1);
        box.setTintFill
        this.groundContainer.add(box);
        box.setScale(0.6)
        box.angle=5
        let left=this.add.image(900,750, 'gleft').setOrigin(0,1);
        left.setTintFill
        this.groundContainer.add(left);

        let gstone1=this.add.image(900,350, 'gstone1').setOrigin(0,-0.8);
        gstone1.setTintFill
        this.groundContainer.add(gstone1);
        gstone1.flipX=true
        gstone1.angle=-10

        let gstone5=this.add.image(950,280, 'gstone5').setOrigin(0,-0.8);
        gstone5.setTintFill
        this.groundContainer.add(gstone5);
        gstone5.setScale(1.6)


        let gstonee1=this.add.image(517,336, 'gstone1').setOrigin(0,0);
        gstonee1.setTintFill
        this.groundContainer.add(gstonee1);


        let gspike1=this.add.image(602,560, 'gspike1').setOrigin(0,1);
        gspike1.setTintFill
        this.groundContainer.add(gspike1);
        gspike1.setScale(1.6)
        let gMidB=this.add.image(1900,405, 'gMid').setOrigin(0,0);
        gMidB.setTintFill
        this.groundContainer.add(gMidB);
        let gMidA=this.add.image(1100,362, 'gMid').setOrigin(0,0);
        gMidA.setTintFill
        this.groundContainer.add(gMidA);
        gMidA.setScale(1.6)
        let mushroom11=this.add.image(1300,376, 'gMushroom1').setOrigin(0,1);
        mushroom11.setTintFill;
        this.groundContainer.add(mushroom11);
        mushroom11.setScale(0.6)
        let z3=this.add.image(1240,376, 'z3').setOrigin(0,1);
        z3.setTintFill;
        this.groundContainer.add(z3);
        z3.setScale(0.5)

        let z6=this.add.image(1710,376, 'z6').setOrigin(0,1);
        z6.setTintFill;
        this.groundContainer.add(z6);
        z6.setScale(0.2)
        z6.axes=0.5

        let z10=this.add.image(340,376, 'z10').setOrigin(0,1);
        z10.setTintFill;
        this.groundContainer.add(z10);
        z10.setScale(0.5)

        let z15=this.add.image(1870,417, 'z15').setOrigin(0,1);
        z15.setTintFill;
        this.groundContainer.add(z15);
        z15.setScale(0.5)



        let gfellen1=this.add.image(1400,364, 'gfellen1').setOrigin(0,1);
        gfellen1.setTintFill;
        this.groundContainer.add(gfellen1);
        gfellen1.setScale(0.8)
        gfellen1.angle=10
        let gright=this.add.image(1137,772, 'gRight').setOrigin(0,1);
        gright.setTintFill;
        let gleft=this.add.image(1600,810, 'gLeft').setOrigin(0,1);
        gleft.setTintFill;
        let gspike11=this.add.image(1400,590, 'gspike1').setOrigin(0,1);
        gspike11.setTintFill
        this.groundContainer.add(gspike11);
        gspike11.setScale(1.6)
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple ((gMid1.x+gMid1.width+1)
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film')
        ///this.filterbgAnimationA.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA
        //animation de 3 images

        this.anims.create({
            key: 'bganimation',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBoy = this.add.sprite(0, 0, 'B').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'B',
            frames: [
                {key:'B1'},
                {key:'B2'},
                {key:'B3'},
                {key:'B4'},
                {key:'B5'},
                {key:'B6'},
                {key:'B7'},
                {key:'B8'},
                {key:'B9'},
            ],
            frameRate: 16,
            repeat: -1

        });
        this.filterBoy.play('B')
        //animation de 3 images
        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0; ///CHANGER A 0
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;

    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=8;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-8;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}