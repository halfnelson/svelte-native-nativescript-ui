<page>
    <Header title="RadDataForm" />
    <radDataForm source={ticket} metadata={ticketMetadata}>
        <entityProperty name="movie" displayName="Movie Name" index="0" converter={movieConverter}
            valuesProvider={movieNames}>
            <propertyEditor type="Picker" />
        </entityProperty>
        <entityProperty name="date" index="1">
            <propertyEditor type="DatePicker" />
        </entityProperty>
        <entityProperty name="time" index="2">
            <propertyEditor type="TimePicker" />
        </entityProperty>
        <entityProperty name="type" displayName="Type" index="3" valuesProvider="2D, 3D">
            <propertyEditor type="SegmentedEditor" />
        </entityProperty>
        <entityProperty name="price" index="4" readOnly="true">
            <propertyEditor type="Decimal" />
        </entityProperty>
        <entityProperty name="numberOfTickets" displayName="Number of Tickets" index="5">
            <propertyEditor type="Stepper">
                <propertyEditorParams minimum="0" maximum="100" step="2" />
            </propertyEditor>
        </entityProperty>
        <entityProperty name="contactName" displayName="Contact Name" index="6">
            <propertyEditor type="Text" />
        </entityProperty>
        <entityProperty name="contactPhone" displayName="Contact Phone" index="7">
            <propertyEditor type="Phone" />
        </entityProperty>
        <entityProperty name="contactEmail" displayName="Contact Email" index="8">
            <propertyEditor type="Email" />
        </entityProperty>
        <entityProperty name="agreeTerms" displayName="I Agree with Terms" index="9">
            <propertyEditor type="Switch" />
        </entityProperty>
    </radDataForm>
</page>

<script>

    import Header from '../Header.svelte'

    let ticketMetadata = {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
    }

    let ticket = {
        movie: 123,
        date: '2016-04-06',
        time: '20:00',
        type: '2D',
        price:  9.50,
        numberOfTickets: 2,
        contactName: null,
        contactPhone:  null,
        contactEmail: null,
        agreeTerms: false
    }

  
    let movies = [
        { id: 123, name: 'Zootopia' },
        { id: 217, name: 'Captain America' },
        { id: 324, name: 'The Jungle Book' }
    ]

    let movieNames = movies.map((value) => value.name);


    class MovieConverter  {
        constructor(movies) { 
            this._movies = movies
        }

        convertFrom(id) {
            return this._movies.filter((movie) => movie.id === id)[0].name;
        }

        convertTo(name) {
            return this._movies.filter((movie) => movie.name === name)[0].id;
        }
    }

    let movieConverter = new MovieConverter(movies);

</script>