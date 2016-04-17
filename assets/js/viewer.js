(function() {
var Viewer = function() {
	//todo
};

Viewer.AvailableLayer = React.createClass({
	displayName: 'AvailableLayer',
	render: function() {
		return React.createElement('button', {
				'key': this.props.id,
				'type': 'button',
				'className': 'layer add-layer-button list-group-item',
				'data-layer-id': this.props.id,
				'data-tooltip': 'Voeg \'' + this.props.id + '\' toe aan de zichtbare kaarten',
				'data-toggle': 'tooltip',
				'data-placement': 'right'
			},
			this.props.thumbnail ? React.createElement('div', {'className': 'thumbnail-container'},
				React.createElement('img', {
					'className': 'thumbnail',
					'src': this.props.thumbnail,
					'width': 256,
					'height': 256
				})
			) : null,
			React.createElement('span', {'className': 'name'}, this.props.name)
		);
	}
});

Viewer.LayerList = React.createClass({
	displayName: 'LayerList',
	render: function() {
		return React.createElement('div', {'class': 'layers available-layers'},
			this.props.groups.map(function(group) {
				return React.createElement('div', {
						'key': group.name,
						'data-group-id': group.name,
						'className': 'layer-group'
					},
					React.createElement('h4', {'className': 'layer-group-header'},
						group.name,
						React.createElement('span', {'className': 'layer-group-count badge'}, group.layers.length),
						React.createElement('button', {'className': 'group-toggle'},
							React.createElement('span', {'className': 'glyphicon glyphicon-minus'})
						)
					),
					React.createElement('div', {'className': 'layers list-group'},
						group.layers.map(function(layer) {
							return 	React.createElement(Viewer.AvailableLayer, layer);
						})
					)
				);
			})
		);
	}
});

window.Viewer = Viewer;

})();