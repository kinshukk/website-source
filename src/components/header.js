import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = (props) => (
				<li style={{ display: 'inline-block', marginRight: '1rem' }}>
								<Link to={props.to}>{props.children}</Link>
				</li>
)

export default (props) => {
				const data = useStaticQuery(graphql`
								query{
												site{
																siteMetadata{
																				title
																}
												}
								}
				`)

				return (
				<div>
								<header style={{ marginBottom: rhythm(1 / 4) }}>
												<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
																<h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
												</Link>
												<ul style={{ listStyle: `none`, float: `right` }}>
																<ListLink to="/">Blog</ListLink>
																<ListLink to="/about/">About</ListLink>
												</ul>
								</header>	
								{props.children}
				</div>

				)
}

