/**
 * Generates a URL for a specific community page.
 *
 * This function creates a URL for accessing a community page based on the provided community ID.
 * The URL typically follows the pattern `/communities/{id}` where `{id}` is replaced by the actual
 * community ID. This is used to redirect or link to a detailed view of the community.
 *
 * @param communityId - The ID of the community for which to generate the URL.
 * @returns The URL string for the specific community page.
 */
export function getCommunityUrl(communityId: string): string {
  return `/community/${communityId}`;
}

/**
 * Generates a URL for a specific profile page.
 *
 * This function creates a URL for accessing a user profile page based on the provided user ID.
 * The URL typically follows the pattern `/profiles/{id}` where `{id}` is replaced by the actual
 * user ID. This is used to redirect or link to a detailed view of the user profile.
 *
 * @param profileId - The ID of the profile for which to generate the URL.
 * @returns The URL string for the specific profile page.
 */
export function getProfileUrl(userId: string): string {
  return `/profile/${userId}`;
}

/**
 * Generates a URL for a specific post page.
 *
 * This function creates a URL for accessing a post page based on the provided post ID.
 * The URL typically follows the pattern `/posts/{id}` where `{id}` is replaced by the actual
 * post ID. This is used to redirect or link to a detailed view of the post.
 *
 * @param postId - The ID of the post for which to generate the URL.
 * @returns The URL string for the specific post page.
 */
export function getPostUrl(postId: string): string {
  return `/post/${postId}`;
}

/**
 * Generates a URL for searching communities related to a specific game.
 *
 * This function creates a URL for accessing a search page where communities associated
 * with a particular game can be found. The URL typically follows the pattern `/search/communities`
 * and is used to navigate to the search results for communities related to the specified game.
 *
 * @param gameId - The ID of the game for which to search related communities.
 * @returns The URL string for the community search page.
 */
export function getCommunitySearchViaGame(gameId: string): string {
  return `/search/communities`;
}
