/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
	Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

const Pages = function ({ page, total, setPage }) {
	const totalPages = Math.ceil(total / 12);
	console.log(totalPages);
	console.log(total);

	const onClickFirstPage = () => {
		setPage(1);
	};
	const onClickLastPage = () => {
		setPage(Math.ceil(total / 12));
	};
	const onClickNextPage = () => {
		if ((page + 1) <= totalPages) {
			setPage((prevState) => prevState + 1);
		}
	};
	const onClickPreviousPage = () => {
		if ((page - 1) >= 1) {
			setPage((prevState) => prevState - 1);
		}
	};
	const onClickSpecificPage = (p) => {
		setPage(p + 1);
	};

	useEffect(() => {
		setPage(page);
	}, [page]);

	return (
		<Pagination className="d-flex justify-content-center my-3" size="">
			<PaginationItem>
				<PaginationLink
					disabled={page === 1}
					first
					onClick={() => onClickFirstPage()}
				/>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink
					disabled={page === 1}
					onClick={() => onClickPreviousPage()}
					previous
				/>
			</PaginationItem>

			{Array(Math.ceil(total / 12)).fill().map((_, i) => (
				<PaginationItem active={page === (i + 1)} key={i}>
					<PaginationLink onClick={() => onClickSpecificPage(i)}>
						{i + 1}
					</PaginationLink>
				</PaginationItem>
			))}
			<PaginationItem>
				<PaginationLink
					disabled={page === totalPages}
					onClick={() => onClickNextPage()}
					next
				/>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink
					disabled={page === totalPages}
					onClick={() => onClickLastPage()}
					last
				/>
			</PaginationItem>
		</Pagination>
	);
};

export default Pages;
