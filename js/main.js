// Main application single entry point
requirejs([
    'jquery',
    'd3',
    'js/models/network',
    'js/models/trajectory',
    'js/views/network',
    'js/views/modal',
    'js/views/trajectory',
    'js/views/trajectory-table'
], function($, d3, NetworkModel, TrajectoryModel, NetworkView, NetworkModal, TrajectoryView, TrajectoryTable) {

    // Load the JSON file
    $.ajax({
        url: '../data/nuclear_atlas.json',
        dataType: 'json',
        success: function(data) {
            // Data plotted in network
            var data1 = data;

            // Use the data1 variable here
            // ...

            // Example usage: Print the loaded data
            console.log(data1);

            // Continue with the rest of your code using the loaded data

            var dataArray = [data1];

            // Initializing backbone model for network app.
            this.network_model = new NetworkModel(dataArray);

            // Initializing all backbone views.
            this.network_modal = new NetworkModal();
            this.network_view = new NetworkView({ "model": this.network_model });

            // Introduce trajectory logic
            this.trajectory_model = new TrajectoryModel(trajectory);
            this.trajectory_table = new TrajectoryTable({"model": this.trajectory_model });
            this.trajectory_view = new TrajectoryView({ "model": this.trajectory_model, "network_view": this.network_view });
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
});
