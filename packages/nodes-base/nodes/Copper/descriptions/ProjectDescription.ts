import {
	INodeProperties,
} from 'n8n-workflow';

export const projectOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		default: 'create',
		description: 'Operation to perform',
	},
] as INodeProperties[];

export const projectFields = [
	// ----------------------------------------
	//             project: create
	// ----------------------------------------
	{
		displayName: 'Name',
		name: 'name',
		description: 'Name of the project to create.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'string',
				default: '',
				description: 'ID of the user who will own the project to create.',
			},
			{
				displayName: 'Details',
				name: 'details',
				type: 'string',
				default: '',
				description: 'Description of the project to create.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'Open',
				options: [
					{
						name: 'Completed',
						value: 'Completed',
					},
					{
						name: 'Open',
						value: 'Open',
					},
				]
			},
		]
	},

	// ----------------------------------------
	//             project: delete
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to delete.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//               project: get
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//             project: getAll
	// ----------------------------------------
	{
		displayName: 'Filter Fields',
		name: 'filterFields',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the project to filter by.',
			},
		]
	},

	// ----------------------------------------
	//             project: update
	// ----------------------------------------
	{
		displayName: 'Project ID',
		name: 'projectId',
		description: 'ID of the project to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'string',
				default: '',
				description: 'ID of the user who will own the project.',
			},
			{
				displayName: 'Details',
				name: 'details',
				type: 'string',
				default: '',
				description: 'Description to set for the project.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name to set for the project.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'Open',
				options: [
					{
						name: 'Completed',
						value: 'Completed',
					},
					{
						name: 'Open',
						value: 'Open',
					},
				]
			},
		]
	},
] as INodeProperties[];
