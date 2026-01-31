import styles from "./AssetSearcher.module.scss";

export const AssetSearcher = () => {
  return (
    <div className={styles["asset-searcher"]}>
      <div className={styles["search-bar"]}>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search for a stock, index, or commodity..."
        />
      </div>
      {/* Touch Type Suggestion List */}
    </div>
  );
};
