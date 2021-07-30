import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGooglesearch from "../useGooglesearch";
import Search from "../components/Search";
import ImageIcon from "@material-ui/icons/Image";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }] = useStateValue();

  //live api call
  const { data } = useGooglesearch(term);
  // const data = Response;

  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchheader">
        <Link to="/">
          <img
            className="googleimg"
            src="https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            alt=""
          />
        </Link>
        <div className="searchheader_body">
          <Search />
          <div className="searchoptions">
            <div className="optionsleft">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <DescriptionIcon />
                <Link to="/desc">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/img">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/loc">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/room">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="optionsright">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchres">
          <p className="in_seconds">
            About {data?.searchInformation.formattedTotalResults} results in{" "}
            {data?.searchInformation.formattedSearchTime} for {term}
          </p>
          {data?.items.map((item) => (
            <div className="result_search">
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className="imgparent"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                  />
                )}

              <a href={item.link}>{item.displayLink}</a>
              <a className="title_result" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
