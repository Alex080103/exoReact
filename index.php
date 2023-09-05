<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/eb7aa99f8d.js" crossorigin="anonymous"></script>
</head>
<body>
 <?php
    $livres = array(
    array(
        "titre" => "Livre 1",
        "auteur" => "Auteur 1",
        "prix" => 19.99,
        "image" => "https://picsum.photos/id/15/600"
    ),
    array(
        "titre" => "Livre 2",
        "auteur" => "Auteur 2",
        "prix" => 24.99,
        "image" => "https://picsum.photos/id/199/600"
    ),
    array(
        "titre" => "Livre 3",
        "auteur" => "Auteur 3",
        "prix" => 14.99,
        "image" => "https://picsum.photos/id/204/600"

    ),
    array(
        "titre" => "Livre 4",
        "auteur" => "Auteur 4",
        "prix" => 50.99,
        "image" => "https://picsum.photos/id/228/600"

    ),
    // Vous pouvez ajouter plus de livres ici
); ?>
    <!-- START CONTAINER -->
    <div class="grid  md:grid-cols-[70%_30%]">

        <!-- START CONTAINER CARDS -->
        <div class="grid lg:grid-cols-2">
            <?php foreach ($livres as $livre){ ?>

                <!-- CARDS -->
                <div class="flex flex-col justify-center items-center h-auto mt-12 lg:mb-4">
                    <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                        <div class="h-full w-full">
                            <div class="relative w-full">
                                <img src="<?= $livre ['image']?>" class="mb-3 max-h-[300px] h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="">
                                <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                                    <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                                    </div>
                                </button>
                            </div>
                            <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                                <div class="mb-2">
                                    <p class="text-lg font-bold text-navy-700"> <?= $livre ['titre']?> </p>
                                    <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2"><?= $livre ['auteur']?> </p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between md:items-center lg:justify-between ">
                                <div class="flex">
                                    <p class="!mb-0 text-sm font-bold text-brand-500">Prix actuel: <?= $livre ['prix']?> <span>€</span></p>
                                </div>
                                <button type="button" class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                    <!-- <i class="fa-solid fa-cross"></i> -->
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>                        </div>
                    </div>
                </div>
                <!-- END CARDS -->
            <?php } ?>
        </div>
        <!-- END CONTAINER CARDS -->

        <!-- START SHOP PANEL -->
        <div class="relative bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div class="pointer-events-auto w-screen max-w-lg">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Close panel</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <!-- ONE OBJECT -->
                            <li class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                    <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                    <p class="ml-4">$90.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                                </div>
                            </div>
                            </li>
                            <!-- END ONE OBJECT -->
                            <!-- More products... -->
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                        or
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <!-- END SHOP PANEL -->
    </div>
    <!-- END CONTAINER -->


    <!-- ARRAY REACT -->

    <!-- const livres = [
        {
            "titre": "Livre 1",
            "auteur": "Auteur 1",
            "prix": 19.99,
            "image": "https://picsum.photos/id/15/600"
        },
        {
            "titre": "Livre 2",
            "auteur": "Auteur 2",
            "prix": 24.99,
            "image": "https://picsum.photos/id/199/600"
        },
        {
            "titre": "Livre 3",
            "auteur": "Auteur 3",
            "prix": 14.99,
            "image": "https://picsum.photos/id/204/600"
        },
        {
            "titre": "Livre 4",
            "auteur": "Auteur 4",
            "prix": 50.99,
            "image": "https://picsum.photos/id/228/600"
        }
    ]; -->


</body>
</html>