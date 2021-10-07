// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START datafusion_v1beta1_generated_DataFusion_UpdateInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The instance resource that replaces the resource on the server. Currently,
   *  Data Fusion only allows replacing labels, options, and stack driver
   *  settings. All other fields will be ignored.
   */
  // const instance = ''
  /**
   *  Field mask is used to specify the fields that the update will overwrite
   *  in an instance resource. The fields specified in the update_mask are
   *  relative to the resource, not the full request.
   *  A field will be overwritten if it is in the mask.
   *  If the user does not provide a mask, all the supported fields (labels and
   *  options currently) will be overwritten.
   */
  // const updateMask = ''

  // Imports the Datafusion library
  const {DataFusionClient} = require('@google-cloud/data-fusion').v1beta1;

  // Instantiates a client
  const datafusionClient = new DataFusionClient();

  async function updateInstance() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await datafusionClient.updateInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateInstance();
  // [END datafusion_v1beta1_generated_DataFusion_UpdateInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
