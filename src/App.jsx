import { lazy, Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
export default function App() {
  const Home = lazy(() => import("./pages/homePage/index"));
  const SocialLinkProfile = lazy(() =>
    import("./pages/socialLinksProfilePage/index")
  );
  const BlogPreview = lazy(() => import("./pages/blogPreviewCard/index"));
  const ResultsSummary = lazy(() =>
    import("./pages/resultsSummaryComponentPage/index")
  );
  const ProductPreview = lazy(() =>
    import("./pages/ProductPreviewCardComponentPage/index")
  );
  const InteractiveRating = lazy(() =>
    import("./pages/InteractiveRatingComponentPage/index")
  );
  const NftPreview = lazy(() =>
    import("./pages/NftPreviewCardComponentPage/index")
  );
  const OrderSummary = lazy(() =>
    import("./pages/OrderSummaryComponentPage/index")
  );
  const StatsPreview = lazy(() =>
    import("./pages/StatsPreviewCardComponentPage/index")
  );
  const Profile = lazy(() => import("./pages/ProfileCardPage/index"));
  const Article = lazy(() => import("./pages/ArticlePreviewPage/index"));
  return (
    <>
      <HashRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/social-link-profile"
              element={<SocialLinkProfile />}
            />
            <Route path="/blog-preview-card" element={<BlogPreview />} />
            <Route
              path="/results-summary-component"
              element={<ResultsSummary />}
            />
            <Route
              path="/product-preview-card-component"
              element={<ProductPreview />}
            />
            <Route
              path="/interactive-rating-component"
              element={<InteractiveRating />}
            />
            <Route
              path="/nft-preview-card-component"
              element={<NftPreview />}
            />
            <Route path="/Order-summary-component" element={<OrderSummary />} />
            <Route
              path="/stats-preview-card-component"
              element={<StatsPreview />}
            />
            <Route path="/profile-card-component" element={<Profile />} />
            <Route path="/article-preview" element={<Article />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}
