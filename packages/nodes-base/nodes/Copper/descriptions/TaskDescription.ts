import {
	INodeProperties,
} from 'n8n-workflow';

export const taskOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'task',
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

export const taskFields = [
	// ----------------------------------------
	//               task: create
	// ----------------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
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
					'task',
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
				description: 'ID of the user who will own the task to create.',
			},
			{
				displayName: 'Details',
				name: 'details',
				type: 'string',
				default: '',
				description: 'Description of the task to create.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: 'High',
				options: [
					{
						name: 'High',
						value: 'High',
					},
					{
						name: 'None',
						value: 'None',
					},
				]
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
	//               task: delete
	// ----------------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to delete.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//                task: get
	// ----------------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to retrieve.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//               task: getAll
	// ----------------------------------------
	{
		displayName: 'Filter Fields',
		name: 'filterFields',
		type: 'collection',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'task',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Assignee IDs',
				name: 'assignee_ids',
				type: 'string',
				default: '',
				description: 'Comma-separated IDs of assignee IDs to filter by.',
			},
			{
				displayName: 'Project IDs',
				name: 'project_ids',
				type: 'string',
				default: '',
				description: 'Comma-separated IDs of project IDs to filter by.',
			},
		]
	},

	// ----------------------------------------
	//               task: update
	// ----------------------------------------
	{
		displayName: 'Task ID',
		name: 'taskId',
		description: 'ID of the task to update.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'task',
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
					'task',
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
				description: 'ID of the user who will own the task.',
			},
			{
				displayName: 'Details',
				name: 'details',
				type: 'string',
				default: '',
				description: 'Description to set for the task.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name to set for the task.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				default: 'High',
				options: [
					{
						name: 'High',
						value: 'High',
					},
					{
						name: 'None',
						value: 'None',
					},
				]
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
