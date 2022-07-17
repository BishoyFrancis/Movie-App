'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' : 'data-target="#xs-components-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' :
                                            'id="xs-components-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingFavouriteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingFavouriteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingMoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingMoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingPeopleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingPeopleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingTvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingTvComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' : 'data-target="#xs-pipes-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' :
                                            'id="xs-pipes-links-module-AppModule-277edd90bc01bb1fc7299a0d46541e1b9513c52eed0581023c8023dd8c7d311ed203187535db057be72ca71988de71c69e28bcaa2a5504228f6d1fceab5ec0ed"' }>
                                            <li class="link">
                                                <a href="pipes/RemoveColonPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveColonPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RemoveSpacesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveSpacesPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RemoveWhiteSpacePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveWhiteSpacePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-ae6584880d60110d1faa3ddd4f70974f15b3cb85a3f601d557173a506c3f02f4256b976e7979cf28df0972a5fd6fb3e747c4385add281fd93cd9ce2394f8b11b"' : 'data-target="#xs-components-links-module-AuthModule-ae6584880d60110d1faa3ddd4f70974f15b3cb85a3f601d557173a506c3f02f4256b976e7979cf28df0972a5fd6fb3e747c4385add281fd93cd9ce2394f8b11b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-ae6584880d60110d1faa3ddd4f70974f15b3cb85a3f601d557173a506c3f02f4256b976e7979cf28df0972a5fd6fb3e747c4385add281fd93cd9ce2394f8b11b"' :
                                            'id="xs-components-links-module-AuthModule-ae6584880d60110d1faa3ddd4f70974f15b3cb85a3f601d557173a506c3f02f4256b976e7979cf28df0972a5fd6fb3e747c4385add281fd93cd9ce2394f8b11b"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MoviesService.html" data-type="entity-link" >MoviesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HeaderLang.html" data-type="entity-link" >HeaderLang</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credits.html" data-type="entity-link" >Credits</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieDetails.html" data-type="entity-link" >MovieDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersonDetails.html" data-type="entity-link" >PersonDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Provider.html" data-type="entity-link" >Provider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestData.html" data-type="entity-link" >RequestData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TvDetails.html" data-type="entity-link" >TvDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Watch.html" data-type="entity-link" >Watch</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});