<div id='product-component-a1906c3e903'></div>
<script type="text/javascript">
    /*<![CDATA[*/

    (function () {
        var scriptURL = 'https://earshot-web.s3-ap-southeast-2.amazonaws.com/buybutton.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }

        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'media-device-limited.myshopify.com',
                storefrontAccessToken: '6379db1a40f5756138d0cabbfb6e84e2',
            });

            var ui = ShopifyBuy.UI.init(client, {}, '', { affiliateCode: "ROGERWEST" });
            ui.createComponent('product', {
                id: 3956051640429,
                node: document.getElementById('product-component-a1906c3e903'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "layout": "horizontal",
                        "variantId": "all",
                        "width": "100%",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "description": true,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "BUY NOW"
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "background-color": "#000000",
                                ":hover": {
                                    "background-color": "#000000"
                                },
                                ":focus": {
                                    "background-color": "#000000"
                                }
                            },
                            "title": {
                                "font-size": "26px"
                            },
                            "price": {
                                "font-size": "18px"
                            },
                            "compareAt": {
                                "font-size": "15px"
                            }
                        }
                    },
                    "cart": {
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "button": {
                                "background-color": "#000000",
                                ":hover": {
                                    "background-color": "#000000"
                                },
                                ":focus": {
                                    "background-color": "#000000"
                                }
                            },
                            "footer": {
                                "background-color": "#ffffff"
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "buttonWithQuantity": true,
                            "button": false,
                            "quantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "background-color": "#000000",
                                ":hover": {
                                    "background-color": "#000000"
                                },
                                ":focus": {
                                    "background-color": "#000000"
                                }
                            }
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#000000",
                                ":hover": {
                                    "background-color": "#000000"
                                },
                                ":focus": {
                                    "background-color": "#000000"
                                }
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    }
                }
            });
        }
    })();
    /*]]>*/
</script>
