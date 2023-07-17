type Blog = {
	id?: number;
	title: string;
	body: string;
	username: string;
};

type DynamicPageProps = {
	params: {
		id: string;
	};
};
