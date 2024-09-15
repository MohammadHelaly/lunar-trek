import { Routes } from "@/lib/router";
import { useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  useTypedDispatch,
  useTypedSelector,
} from "@/lib/hooks/typed-redux-hooks";
import { dataActions } from "@/lib/store/slices/data-slice";
import { scrollTo } from "@/lib/utils";

interface LinkItem {
  text: string;
  href?: string;
  onClick?: () => void;
}

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const NavLinks = () => {
  const { pathname } = useLocation();

  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake,
  );

  const dispatch = useTypedDispatch();

  const { reset, setSelectedMoonquake, setTimeSeriesData } = dataActions;

  const resetContextHandler = () => {
    dispatch(reset());
  };

  const viewTimeSeriesDataHandler = () => {
    dispatch(setSelectedMoonquake(undefined));
    dispatch(
      setTimeSeriesData({
        on: true,
        shallowMoonquakes: true,
        deepMoonquakes: true,
        meteoriteImpacts: true,
        artificialImpacts: true,
      }),
    );
  };

  const freeExplorationHandler = () => {
    dispatch(setSelectedMoonquake(undefined));
    dispatch(
      setTimeSeriesData({
        on: false,
        shallowMoonquakes: false,
        deepMoonquakes: false,
        meteoriteImpacts: false,
        artificialImpacts: false,
      }),
    );
  };

  const scrollToExploreHandler = () => {
    scrollTo("explore");
  };

  const scrollToAboutHandler = () => {
    scrollTo("about");
  };

  const scrollToContactHandler = () => {
    scrollTo("contact");
  };

  const landingPageLinks: LinkItem[] = [
    { text: "Explore Luna", onClick: scrollToExploreHandler },
    { text: "About", onClick: scrollToAboutHandler },
    { text: "Contact", onClick: scrollToContactHandler },
  ];

  const unrealEngineExplorationPageLinks: LinkItem[] = [
    { text: "Back to Home", href: Routes.HOME },
  ];

  const globeExplorationPageLinks: LinkItem[] = [
    {
      text: !selectedMoonquake ? "Free Exploration" : "Deselect Seismic Event",
      onClick: freeExplorationHandler,
    },
    {
      text: "Time Series Analysis",
      onClick: viewTimeSeriesDataHandler,
    },
    {
      text: "Back to Home",
      href: Routes.HOME,
      onClick: resetContextHandler,
    },
  ];

  const renderLink = (link: LinkItem) => {
    const Link = !link.href ? "button" : NavLink;

    return (
      <motion.li
        key={link.text}
        variants={variants}
        transition={transition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Link
          to={link.href as string}
          onClick={link.onClick}
          className="flex h-full items-center px-2 py-1"
        >
          <p className="w-full text-center font-futura text-base font-normal text-white">
            {link.text}
          </p>
        </Link>
      </motion.li>
    );
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {pathname === Routes.HOME && landingPageLinks.map(renderLink)}
      {pathname === Routes.GLOBE_EXPLORATION && (
        <>
          {renderLink(globeExplorationPageLinks[0])}
          {globeExplorationPageLinks.slice(1).map(renderLink)}
        </>
      )}
      {pathname === Routes.UNREAL_ENGINE_EXPLORATION &&
        unrealEngineExplorationPageLinks.map(renderLink)}
    </AnimatePresence>
  );
};

export default NavLinks;
